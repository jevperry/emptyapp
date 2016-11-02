import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { MdComponent } from './md.component';
import { Md2Component } from './md2.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/md1',
        pathMatch: 'full'
      },
      {
          path: 'md1',
          component: MdComponent,
          data: {
            id: 'md1',
          }
      },
      {
          path: 'md2',
          component: Md2Component,
          data: {
            id: 'md2',
          }
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}