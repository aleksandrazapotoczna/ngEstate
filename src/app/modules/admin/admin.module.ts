import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { ApartmentsComponent } from './pages/apartments/apartments.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminMenuComponent } from 'src/app/modules/admin/core/components/admin-menu/admin-menu.component';
import { ListComponent } from 'src/app/shared/list/list.component';
import { AddInvestmentComponent } from './pages/investments/add-investment/add-investment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditInvestmentComponent } from './pages/investments/edit-investment/edit-investment.component';
import { EditApartmentComponent } from './pages/apartments/edit-apartment/edit-apartment.component';

@NgModule({
  declarations: [
    InvestmentsComponent,
    ApartmentsComponent,
    MessagesComponent,
    AdminComponent,
    AdminMenuComponent,
    AddInvestmentComponent,
    EditInvestmentComponent,
    EditApartmentComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ListComponent,
    ReactiveFormsModule,
  ],
})
export class AdminModule { }
