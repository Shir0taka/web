import { Routes } from '@angular/router';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NoPageComponent } from './pages/no-page/no-page.component';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';

export const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'books', component: BooksComponent },
    { path: 'books/addbook', component: AddBookComponent },
    
    //404
    { path: '**', component: NoPageComponent },
];
