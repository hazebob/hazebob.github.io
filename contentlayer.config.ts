import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { format, parseISO } from 'date-fns'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/article/${post._raw.flattenedPath}`,
    },
    formattedDate: {
      type: 'string',
      resolve: (doc) => format(parseISO(doc.date), 'yyyy. MM. dd.'),
    },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  disableImportAliasWarning: true,
}) 
