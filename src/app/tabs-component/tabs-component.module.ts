import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tabsComponentRoutingModule } from './tabs-component-routing.module'; 
import { TabsComponentComponent } from './tabs-component.component';


@NgModule({
  declarations: [ TabsComponentComponent],
  imports: [
    CommonModule,
    tabsComponentRoutingModule
  ]
})
export class TabsComponentModule { }
