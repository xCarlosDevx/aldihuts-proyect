const routes = [{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    props: true,
    children: [{
        name:'home',
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        name:'ordenes',
        path: '/ordenar-menu',
        component: () => import('pages/Ordenar.vue')
      },
      {
        name:'menuCrud',
        path: '/gestion-productos',
        component: () => import('pages/menuCrud.vue')
      },
      {
        name: 'orderStart',
        path: 'realizar-orden',
        component: ()=> import ('pages/ordenes.vue'),
        props: true,
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
