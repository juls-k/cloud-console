import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarHeadComponent } from './layout/sidebar/head/head.component';
import { SidebarMenuComponent } from './layout/sidebar/menus/menu.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ContentComponent } from './main/content/content.component';
import { ContentHeadComponent } from './main/content/head/head.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    SidebarHeadComponent,
    SidebarMenuComponent,
    ContentHeadComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
