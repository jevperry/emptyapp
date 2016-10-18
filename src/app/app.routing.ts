import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdComponent }      from './md.component';
import { Md2Component }      from './md2.component';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/md1',
      pathMatch: 'full'
    },
    {
        path: 'md1',
        component: MdComponent
    },
    {
        path: 'md2',
        component: Md2Component
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);