// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { format, parseISO } from "date-fns";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`
    },
    formattedDate: {
      type: "string",
      resolve: (doc) => format(parseISO(doc.date), "yyyy\uB144 MM\uC6D4 dd\uC77C")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  disableImportAliasWarning: true
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-W4QHVP6B.mjs.map
