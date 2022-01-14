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
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { VoteHighlightDirective } from './vote-highlight.directive';
import { DateAgoPipe } from './date-ago.pipe';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    QuoteComponent,
    FormComponent,
    DeleteComponent,
    DownVoteComponent,
    QuoteDetailsComponent,
    VoteHighlightDirective,
    DateAgoPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
