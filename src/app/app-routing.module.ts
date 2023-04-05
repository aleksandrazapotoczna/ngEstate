import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ApartmentsComponent } from './pages/apartments/apartments.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { SingleApartmentComponent } from './pages/single-apartment/single-apartment.component';
import { AboutCompanyComponent } from './pages/about-us/about-company/about-company.component';
import { CompanyNumbersComponent } from './pages/about-us/company-numbers/company-numbers.component';
import { TeamMembersComponent } from './pages/about-us/team-members/team-members.component';
import { CompanyAdvertismentComponent } from './pages/about-us/company-advertisment/company-advertisment.component';
import { OpinionsComponent } from './pages/about-us/opinions/opinions.component';

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
    path: 'single-apartment/:id',
    component: SingleApartmentComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
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
