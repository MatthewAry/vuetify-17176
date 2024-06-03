/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../pages/index.vue'),
      children: [
        {
          path: '',
          component: () => import('../pages/pick.vue')
        },
        {
          path: 'letter/:letter',
          name: 'letter',
          props: true,
          component: () => import('../pages/letter.vue'),
          children: [
            {
              path: '',
              props: true,
              name: 'number',
              component: () => import('../pages/number.vue')
            }
          ]
        }
      ],
    },
    {
      path: '/hello/tr',
      name: 'hello',
      component: () => import('../pages/ShowHello.vue')
    }
  ]
})

export default router
