import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMenuComponent } from 'src/app/modules/admin/core/components/admin-menu/admin-menu.component';
import { AdminComponent } from './admin.component';
import { ApartmentsComponent } from './pages/apartments/apartments.component';
import { EditApartmentComponent } from './pages/apartments/edit-apartment/edit-apartment.component';
import { EditInvestmentComponent } from './pages/investments/edit-investment/edit-investment.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { MessagesComponent } from './pages/messages/messages.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'investments',
        component: InvestmentsComponent,
      },
      {
        path: 'add-investment',
        component: EditInvestmentComponent,
      },
      {
        path: 'edit-investment/:id',
        component: EditInvestmentComponent,
      },
      {
        path: 'apartments',
        component: ApartmentsComponent,
      },
      {
        path: 'add-apartment',
        component: EditApartmentComponent,
      },
      {
        path: 'edit-apartment/:id',
        component: EditApartmentComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
      {
        path: '**',
        redirectTo: 'investments'
      }
    ],
  },
  {
    path: 'admin-menu',
    component: AdminMenuComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
