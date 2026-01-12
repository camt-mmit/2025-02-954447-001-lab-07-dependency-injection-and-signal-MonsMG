import { Routes } from '@angular/router';
import { AssignmentDisplayPage } from './pages/assignment-display-page/assignment-display-page';

export default [
  {
    path: '',
    component: AssignmentDisplayPage,
    children: [
      { path: '', redirectTo: 'display', pathMatch: 'full' },
      { path: 'display', component: AssignmentDisplayPage },
    ],
  },
] as Routes;
