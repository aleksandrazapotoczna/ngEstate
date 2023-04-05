import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { ApartmentsComponent } from './pages/apartments/apartments.component';
import { CardComponent } from './shared/card/card.component';
import { ListComponent } from './shared/list/list.component';
import { HeadersInterceptor } from './core/interceptors/headers.interceptor';
import { SingleApartmentComponent } from './pages/single-apartment/single-apartment.component';
import { PopupComponent } from './core/components/popup/popup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AboutCompanyComponent } from './pages/about-us/about-company/about-company.component';
import { CompanyNumbersComponent } from './pages/about-us/company-numbers/company-numbers.component';
import { TeamMembersComponent } from './pages/about-us/team-members/team-members.component';
import { CompanyAdvertismentComponent } from './pages/about-us/company-advertisment/company-advertisment.component';
import { OpinionsComponent } from './pages/about-us/opinions/opinions.component';
import { AboutInvestmentComponent } from './pages/single-apartment/about-investment/about-investment.component';
import { SolutionsComponent } from './pages/single-apartment/solutions/solutions.component';
import { ApartmentServicesComponent } from './pages/single-apartment/apartment-services/apartment-services.component';
import { CreditComponent } from './pages/single-apartment/credit/credit.component';
import { ApartmentPlanComponent } from './pages/single-apartment/apartment-plan/apartment-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    InvestmentsComponent,
    ApartmentsComponent,
    SingleApartmentComponent,
    PopupComponent,
    ContactComponent,
    AboutCompanyComponent,
    CompanyNumbersComponent,
    TeamMembersComponent,
    CompanyAdvertismentComponent,
    OpinionsComponent,
    AboutInvestmentComponent,
    SolutionsComponent,
    ApartmentServicesComponent,
    CreditComponent,
    ApartmentPlanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CardComponent,
    ListComponent,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
