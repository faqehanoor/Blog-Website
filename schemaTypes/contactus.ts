 

export default {
    name: 'contactUs',
    title: 'Contact Us Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'text',
      },
      {
        name: 'phone',
        title: 'Phone Number',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email Address',
        type: 'string',
      },
      {
        name: 'socialLinks',
        title: 'Social Media Links',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  };
  