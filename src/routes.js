import HomeView from './$views/home.view.svelte'

const routes = [
    {
        name: '/',
        component: HomeView
    },
    {
        name: '/home',
        component: HomeView
    },
]

export { routes }