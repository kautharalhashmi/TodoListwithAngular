import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Signin } from './pages/signin/signin';
import { Signup } from './pages/signup/signup';
export const routes: Routes = [
  { path: '', component: Home },
   { path: 'about', component: About },
  { path: 'contact', component: Contact },
    { path: 'signin', component: Signin },
  { path: 'signup', component: Signup },
];

