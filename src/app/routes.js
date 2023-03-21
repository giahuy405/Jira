import { Home, Contact, About, Login, Signup, Board, Settings, Users } from "../pages";

export const routes = [
    { path: '/', component: Home },
    { path: '/project', component: Board },
    { path: '/contact', component: Contact },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/project/board', component: Board },
    { path: '/project/settings', component: Settings },
    { path: '/project/users', component: Users },

]