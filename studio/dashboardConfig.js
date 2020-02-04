export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e332307420cd94ac7099f71',
                  title: 'Sanity Studio',
                  name: 'alex-ford-blog-studio',
                  apiId: '223dfc97-f34d-4986-98c5-f3c07275c51e'
                },
                {
                  buildHookId: '5e332307fe161ee4f3cf89a5',
                  title: 'Blog Website',
                  name: 'alex-ford-blog',
                  apiId: 'e8e638a4-616e-40dc-88e1-7d6e5349028c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MagneticMule/alex-ford-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://alex-ford-blog.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
