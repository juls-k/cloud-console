import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SidebarHeadComponent } from './head/head.component';
import { SidebarMenuComponent } from './menus/menu.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarMenuComponent,
    SidebarHeadComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
      SidebarComponent,
      SidebarHeadComponent,
      SidebarMenuComponent
  ],
  providers: []
})
export class SidebarModule { }
