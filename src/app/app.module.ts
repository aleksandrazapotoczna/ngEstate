import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    InvestmentsComponent,
    ApartmentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CardComponent, ListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
