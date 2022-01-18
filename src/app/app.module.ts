import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InsriptionDisabledDirectiveDirective } from './insription-disabled-directive.directive';
import { FormsModule, NgForm } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin/admin.component';
import { SessionAddFormComponent } from './admin/session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './admin/session-edit-form/session-edit-form.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  {
  path: 'list',component: SessionItemListComponent},
  {
 // path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
   path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
  ];
@NgModule({
  
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InsriptionDisabledDirectiveDirective,
    PageNotFoundComponent,
    
  ],
  imports: [RouterModule.forRoot(appRoutes, 
    { enableTracing: true}),
    RouterModule,
    BrowserModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
