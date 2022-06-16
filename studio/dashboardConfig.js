export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '62aaae13f3e87a2bcc6e9275',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vaaaofa1',
                  apiId: '4705845d-d520-4d07-bd3f-8406de4dbd36'
                },
                {
                  buildHookId: '62aaae142051b62bd755003e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-s7s6dq6q',
                  apiId: 'b9a5a0c4-4b1a-49ac-9578-091855690c77'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/acceleratewordpress/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-s7s6dq6q.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
