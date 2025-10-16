import { Routes } from '@angular/router';
import { Impressum } from './impressum/impressum';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'impressum', component: Impressum }
];
