import { Home, Contact, About, Login, Signup, Board, Settings, Users,ProjectManagement } from "../pages";

export const routes = [
    { path: '/', component: Home },
    { path: '/project', component: Board },
    { path: '/contact', component: Contact },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/project/board', component: Board },
    { path: '/project/create-project', component: Settings },
    { path: '/project/users', component: Users },
    { path: '/project/management', component: ProjectManagement },

]