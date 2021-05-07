import { PhotoDetailsComponent } from './photos/photos-details/photo-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
// In most recent Angular versions, the import method has changed:
// {
//     path: 'home', 
//     loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
// }
    {
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        }
    },
    {
        path: 'p/add',
        component: PhotoFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'p/:photoId',
        component: PhotoDetailsComponent
    },
    { 
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, { useHash: true }) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
