import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Tasks } from './tasks/tasks';
import { About } from './pages/about/about';

export const routes: Routes = [
    {path: '',component: Home},
    {path: 'tasks',component: Tasks},
    {path: 'about',component: About},
];
