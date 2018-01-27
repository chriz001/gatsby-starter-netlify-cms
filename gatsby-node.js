const path = require("path");
const _ = require("lodash");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        context: {} // additional data can be passed via context
      });
    });
  });
};

exports.onCreateNode = ({ node, getNode, getNodes, boundActionCreators }) => {
  if (node.internal.type === "MarkdownRemark") {
    const media = getNodes().filter(e => e.internal.type === "File");

    const photoRegex = /\.(gif|jpg|jpeg|tiff|png)$/i;
    const isPhotoUrl = filename =>
      _.isString(filename) && photoRegex.test(filename);
    const getMediaItemID = mediaItem => (mediaItem ? mediaItem.id : null);

    const getMediaFromValue = (value, key) => {
      if (isPhotoUrl(value)) {
        const mediaNodeID = getMediaItemID(
          media.find(m => {
            console.log(value);
            return m.relativePath === value; //.replace(/^.*[\\/]/, "");
          })
        );
        return {
          mediaNodeID,
          deleteField: !!mediaNodeID
        };
      }
      return {
        mediaNodeID: null,
        deleteField: false
      };
    };

    const replaceFieldsInObject = object => {
      let deletedAllFields = true;
      _.each(object, (value, key) => {
        const { mediaNodeID, deleteField } = getMediaFromValue(value, key);

        if (mediaNodeID) {
          object[`${key}___NODE`] = mediaNodeID;
        }
        if (deleteField) {
          delete object[key];
          // We found photo node (even if it has no image),
          // We can end processing this path
          return;
        } else {
          deletedAllFields = false;
        }

        if (_.isArray(value)) {
          value.forEach(v => replaceFieldsInObject(v));
        } else if (_.isObject(value)) {
          replaceFieldsInObject(value);
        }
      });

      // Deleting fields and replacing them with links to different nodes
      // can cause build errors if object will have only linked properites:
      // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/schema/infer-graphql-input-fields.js#L205
      // Hacky workaround:
      // Adding dummy field with concrete value (not link) fixes build
      if (deletedAllFields && object && _.isObject(object)) {
        object[`dummy`] = true;
      }
    };
    replaceFieldsInObject(node.frontmatter);
  }
};
