import { Home, Contact, About, Login, Signup, Project, Settings, Users } from "../pages";

export const routes = [
    { path: '/', component: Home },
    { path: '/project', component: Project },
    { path: '/contact', component: Contact },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/project/board', component: Project },
    { path: '/project/settings', component: Settings },
    { path: '/project/users', component: Users },

]