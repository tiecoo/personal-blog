const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/diego/Workspace/studies/my-blog/src/templates/blogPost.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/diego/Workspace/studies/my-blog/src/pages/index.js")))
}

