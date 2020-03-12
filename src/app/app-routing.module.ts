import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  // The following line adds the RouterModule to the AppRoutingModule 
  // imports array and configures it with the routes in one step by calling RouterModule.forRoot():
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  //The forRoot() method supplies the service providers and directives needed for routing, 
  //and performs the initial navigation based on the current browser URL.
],
  exports: [RouterModule]
})
// AppRoutingModule exports RouterModule so it will be available throughout the app.
export class AppRoutingModule { }
