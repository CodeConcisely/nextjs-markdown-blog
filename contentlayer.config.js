import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/index.{md,mdx}',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      description: 'When the post was published',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: post => {
        return post._raw.sourceFileDir;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
});
