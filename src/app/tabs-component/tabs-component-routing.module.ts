import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponentComponent } from './tabs-component.component';

const routes: Routes = [
    {
      path: '',
      component: TabsComponentComponent,
      children:[
        {
          path: 'tab1',
          loadChildren: () => import('./tab1/tab1-routing.module').then( m => m.Tab1RoutingModule)
        },
        {
          path: 'tab2',
          loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
        },
        {
          path: 'tab3',
          loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
        },
        {
          path: 'tab4',
          loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
        },
        {
          path: '',
          redirectTo: 'home/tab2',
          pathMatch: 'full'
        },
      ]
    },

  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class tabsComponentRoutingModule { }
