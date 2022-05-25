import HomeView from './$views/home.view.svelte'
import UserView from './$views/users.view.svelte'
import LoginView from './$views/login.view.svelte'
import TasksView from './$views/tasks.view.svelte'

const routes = [
    {
        name: '/',
        component: HomeView,
        onlyIf: {guard: isLogin, redirect: 'login'}
    },
    {
        name: 'home',
        component: HomeView,
        onlyIf: {guard: isLogin, redirect: 'login'}
    },
    {
        name: 'login',
        component: LoginView,
        onlyIf: {guard: needLogin, redirect: 'home'}
    },
    {
        name: 'user',
        component: UserView,
        onlyIf: {guard: isLogin, redirect: 'login'}
    },
    {
        name: 'tasks',
        component: TasksView,
        onlyIf: {guard: isLogin, redirect: 'login'}
    },
]

function needLogin() {
    const token = localStorage.getItem('token')
    
    return !token
}

function isLogin() {
    
    const token = localStorage.getItem('token')

    return token
}

export { routes }