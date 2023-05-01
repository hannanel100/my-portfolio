const project = {
  name: "project",
  title: "Project",
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
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    { name: "github", title: "Github", type: "url" },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessiblity.",
              options: {
                hotspot: true,
              },
            },
          ],
        },
        {
          type: "code",
          options: {
            language: "javascript",
            languageAlternatives: [
              { title: "Javascript", value: "javascript" },
              { title: "Typescript", value: "typescript" },
              { title: "HTML", value: "html" },
              { title: "CSS", value: "css" },
            ],
            withFilename: true,
          },
        },
      ],
    },
  ],
};

export default project;
