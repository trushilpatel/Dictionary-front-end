import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { WordHistoryComponent } from "./word-history/word-history.component";
import { FavouritWordsComponent } from "./favourit-words/favourit-words.component";
import { DefineWordComponent } from "./define-word/define-word.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from './core/services/auth/auth.service';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "define/:word", canActivate: [AuthService], component: DefineWordComponent },
  { path: "define/:destLanguage/:word", canActivate: [AuthService], component: DefineWordComponent },
  { path: "home", canActivate: [AuthService], component: HomeComponent },
  { path: "history", canActivate: [AuthService], component: WordHistoryComponent },
  { path: "favourite", canActivate: [AuthService], component: FavouritWordsComponent },
  { path: "**", canActivate: [AuthService], redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
