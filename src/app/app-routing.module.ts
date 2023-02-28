import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ApartmentsComponent } from './pages/apartments/apartments.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { InvestmentsComponent } from './pages/investments/investments.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'investments',
    component: InvestmentsComponent,
  },
  {
    path: 'apartments/:id',
    component: ApartmentsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
