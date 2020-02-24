import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GridContainerDirective } from './grid-container.directive';
import { GridItemDirective } from './grid-item.directive';

const routes: Routes = [
  { path: '', component: AppComponent }
]

@NgModule({
  imports:      [ BrowserModule, 
  FormsModule,
  RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, GridContainerDirective, GridItemDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
