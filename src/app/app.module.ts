import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/components/header/header.component";
import { FooterComponent } from "./core/components/footer/footer.component";
import { SidebarComponent } from "./core/components/sidebar/sidebar.component";
import { HomeComponent } from "./home/home.component";
import { WordHistoryComponent } from "./word-history/word-history.component";
import { FavouritWordsComponent } from "./favourit-words/favourit-words.component";
import { DefineWordComponent } from "./define-word/define-word.component";
import { JsonToArrayGooglePipe } from "./core/pipes/jsonToArrayGooglePipe/json-to-array-google.pipe";
import { LoginComponent } from "./login/login.component";
import { HeaderSetterInterceptorService } from "./core/services/interceptor/header-setter-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    WordHistoryComponent,
    FavouritWordsComponent,
    DefineWordComponent,
    JsonToArrayGooglePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderSetterInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
