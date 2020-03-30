import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WordHistoryComponent } from './word-history/word-history.component';
import { FavouritWordsComponent } from './favourit-words/favourit-words.component';
import { DefineWordComponent } from './define-word/define-word.component';


const routes: Routes = [
  { path: 'define/:word', component: DefineWordComponent },
  { path: 'define/:destLanguage/:word', component: DefineWordComponent},
  { path: 'home', component: HomeComponent },
  { path: 'history', component: WordHistoryComponent },
  { path: 'favourite', component: FavouritWordsComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
