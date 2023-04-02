import { Home, Login, Signup, Board, Settings, Users, ProjectManagement, ProjectDetail } from "../pages";
import Profile from "../pages/Profile";

export const routes = [
    { path: '/', component: Home },
    { path: '/project', component: ProjectManagement, isAdmin: true, redirectPath: '/login' },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/project/create-project', component: Settings, isAdmin: true, redirectPath: '/login' },
    { path: '/project/users', component: Users, isAdmin: true, redirectPath: '/login' },
    { path: '/project/management', component: ProjectManagement, isAdmin: true, redirectPath: '/login' },
    { path: '/project/detail/:id', component: ProjectDetail, isAdmin: true, redirectPath: '/login' },
    { path: '/project/profile', component: Profile, isAdmin: true, redirectPath: '/login' },
]