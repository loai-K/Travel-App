import { createRouter, createWebHistory, useRoute } from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'

const routes = [
    { path: '/', name: 'Home', component: Home, alias: '/home' },
    { path: '/index', redirect: { name: 'Home' } },
    { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */'@/views/About.vue') },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/dashboard',
        name: 'Protected',
        components: {
            default: () => import('@/views/Protected.vue'),
            LeftSidebar: () => import('@/components/LeftSidebar.vue')
        },
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/invoices',
        name: 'Invoices',
        components: {
            default: () => import('@/views/Invoices.vue'),
            LeftSidebar: () => import('@/components/LeftSidebar.vue')
        },
        meta: {
            requireAuth: true
        }
    },
    // { path: '/destination/:id?', name: 'Destination', component: () => import('@/views/Destination.vue') },
    {
        path: '/destination/:destinationSlug()',
        name: 'Destination.Show',
        component: () => import('@/views/Destination.vue'),
        props: route => ({ ...route.params, destinationSlug: route.params.destinationSlug }),
        beforeEnter(to, from) {
            const checkDestination = sourceData.destinations.find(dest => dest.slug === to.params.destinationSlug)
            if(!checkDestination) return {
                name: 'NotFound',
                // allows keeping the URL while rendering a different page
                params: { pathMatch: to.path.split('/').slice(1) },
                query: to.query,
                hash: to.hash,
            }
        },
        children: [
            {
                path: ':experienceSlug?',
                name: 'Experience.Show',
                component: () => import('@/views/Experience.vue'),
                props: route => ({ ...route.params, experienceSlug: route.params.experienceSlug }),
            },
        ]
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('@/views/Search.vue'),
        props: route => ({ query: route.query.q })
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory("/"),
    routes,
    linkActiveClass: 'active-link',
    scrollBehavior (to, from, savedPosition) {
        // return savedPosition || { top: 0 }
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
        })
    }
})

router.beforeEach((to, from) => {
    if(to.meta.requireAuth && !window.user) {
        return { name: 'Login', query: { redirect: to.fullPath } }
    }
})

export default router;