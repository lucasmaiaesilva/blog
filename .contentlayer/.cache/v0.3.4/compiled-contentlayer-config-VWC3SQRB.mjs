// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "blog/**/*.mdx",
  // path to mdx files
  contentType: "mdx",
  fields: {
    // schema for the frontmatter data in the mdx file
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    published: {
      type: "boolean",
      default: false
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentTypes: [Doc]
  // mdx: {
  //   remarkPlugins: [remarkGfm],
  //   rehypePlugins: [
  //     rehypeSlug,
  //     [
  //       rehypePrettyCode,
  //       {
  //         theme: 'github-dark',
  //         onVisitLine(node) {
  //           // Prevent lines from collapsing in `display: grid` mode, and allow empty
  //           // lines to be copy/pasted
  //           if (node.children.length === 0) {
  //             node.children = [{ type: 'text', value: ' ' }]
  //           }
  //         },
  //         onVisitHighlightedLine(node) {
  //           node.properties.className.push('line--highlighted')
  //         },
  //         onVisitHighlightedWord(node) {
  //           node.properties.className = ['word--highlighted']
  //         }
  //       }
  //     ],
  //     [
  //       // allow skip to the headings with the slug
  //       rehypeAutolinkHeadings,
  //       {
  //         properties: {
  //           className: ['subheading-anchor'],
  //           ariaLabel: 'Link to section'
  //         }
  //       }
  //     ]
  //   ]
  // }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-VWC3SQRB.mjs.map
