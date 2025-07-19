import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { ConnectionsComponent } from './connections/connections.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"/login",
        pathMatch: 'full'
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"feed",
        component:FeedComponent
    },
    {
        path:"profile",
        component:ProfileComponent
    },
    {
        path:"connections",
        component:ConnectionsComponent
    }

];
