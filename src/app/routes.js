import { Home, Contact, About, Login, Signup, Board, Settings, Users, ProjectManagement, ProjectDetail } from "../pages";

export const routes = [
    { path: '/', component: Home },
    { path: '/project', component: ProjectManagement },
    { path: '/contact', component: Contact },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/project/board', component: Board },
    { path: '/project/create-project', component: Settings },
    { path: '/project/users', component: Users },
    { path: '/project/management', component: ProjectManagement },
    { path: '/project/detail/:id', component: ProjectDetail },

]