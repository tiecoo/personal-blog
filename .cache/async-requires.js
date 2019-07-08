// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("/home/diego/Workspace/studies/my-blog/src/templates/blogPost.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---cache-dev-404-page-js": () => import("/home/diego/Workspace/studies/my-blog/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("/home/diego/Workspace/studies/my-blog/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

