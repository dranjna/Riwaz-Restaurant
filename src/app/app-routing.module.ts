import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule } from '@angular/router'
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
const routes: Routes=[
  {path:'footer',component:FooterComponent},
  {
    path:'header', component:HeaderComponent
},
{path:'banner', component:BannerComponent, pathMatch:'full'},
{path:'menu', component:MenuComponent},
{path:'home', component:HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
 
})

export class AppRoutingModule { }
