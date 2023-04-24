const about = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
            {
              name: "email",
              title: "Email",
              type: "email",
            },
          ],
        },
      ],
    },
  ],
};

export default about;
