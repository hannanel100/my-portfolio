const technologies = {
    name: 'technologies',
    title: 'Technologies',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                },
            ],
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'title',
            title: 'title',
            type: 'string',
        },
        {
            name: 'isFrontend',
            title: 'Is Frontend',
            type: 'boolean',
        },
    ],
};
export default technologies;

