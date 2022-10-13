import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Component } from '../tabs-component/tab1/tab1.component';
import { Tab2Page } from '../tabs-component/tab2/tab2.page'; 
import { Tab3Page } from '../tabs-component/tab3/tab3.page'; 
import { Tab4Page } from '../tabs-component/tab4/tab4.page'; 
// import { TabsComponentComponent } from '../tabs-component/tabs-component.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'tab1',
    component: Tab1Component,
  },
  {
    path: 'tab2',
    component: Tab2Page,
  },
  {
    path: 'tab3',
    component: Tab3Page,
  },
  {
    path: 'tab4',
    component: Tab4Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
