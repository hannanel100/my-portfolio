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
  ],
};

export default about;
