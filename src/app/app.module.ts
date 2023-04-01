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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CardComponent,
    ListComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
