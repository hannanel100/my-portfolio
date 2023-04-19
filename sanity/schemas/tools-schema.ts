const tools = {
  name: "tools",
  title: "Tools",
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
      name: "title",
      titl: "Title",
      type: "string",
    },
  ],
};

export default tools;
