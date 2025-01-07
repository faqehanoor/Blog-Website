// schemas/blog.js

export default {
    name: 'blog',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'content',
        title: 'Content',
        type: 'text',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
      {
        name: 'publishedDate',
        title: 'Published Date',
        type: 'datetime',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  