import store from '@/store'
import EmptyJournalPage from '@/views/journal/EmptyJournalPage.vue'
import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import(
                /* webpackChunkName: "authentication" */ '../views/Login.vue'
            ),
        beforeEnter(to, from, next) {
            store.commit('users/logout')
            next()
        },
    },
    {
        path: '/register',
        name: 'Registration',
        component: () =>
            import(
                /* webpackChunkName: "authentication" */ '../views/Registration.vue'
            ),
    },
    {
        path: '/logout',
        redirect: '/login',
    },
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(
                /* webpackChunkName: "journali" */
                '../views/JournaliShell.vue'
            ),
        children: [
            {
                path: 'page/:pageId',
                name: 'Page',
                component: () =>
                    import('../containers/JournalPageContainer.vue'),
            },
            {
                path: 'page/:pageId/create',
                name: 'createItem',
                component: () =>
                    import('../containers/CreateItemPageContainer.vue'),
            },
            {
                path: 'user-settings',
                name: 'UserSettings',
                component: () => import('../views/UserSettings.vue'),
            },
            {
                path: 'statistics',
                name: 'Statistics',
                component: () => import('../views/Statistics.vue'),
            },
            {
                path: '*',
                component: EmptyJournalPage,
            },
        ],
    },
]

export default routes
