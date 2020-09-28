export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5f722e350727d06ae4682b98',
                  title: 'Sanity Studio',
                  name: 'organized-thoughts-studio',
                  apiId: '0900d683-2978-48aa-8bd2-2b5841c3a96a'
                },
                {
                  buildHookId: '5f722e360bbae8513e233fa8',
                  title: 'Blog Website',
                  name: 'organized-thoughts',
                  apiId: '52ca09ae-61b8-463d-8481-e05aea03d030'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hanami-dp/organized-thoughts',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://organized-thoughts.netlify.app', category: 'apps'}
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
