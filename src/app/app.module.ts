import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuoteComponent } from './quote/quote.component';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';
import { DownVoteComponent } from './down-vote/down-vote.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    QuoteComponent,
    FormComponent,
    DeleteComponent,
    DownVoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
