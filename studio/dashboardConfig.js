export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60248f6f2ce09287bb6cce02',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-obsp98nj',
                  apiId: 'f50373d4-104a-4dfa-8723-9a9a77dc116c'
                },
                {
                  buildHookId: '60248f6f469264a09aa3bd6d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-k5ckvvjt',
                  apiId: 'a73f5e05-ae21-4c85-8c48-f773f472ffe9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mfahk/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-k5ckvvjt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
