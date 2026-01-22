// --- กำหนดเส้นทางสำหรับ Assignment Feature ---
import { Routes } from '@angular/router';
import { AssignmentDisplayPage } from './pages/assignment-display-page/assignment-display-page';

export default [
  {
    path: '', // เส้นทางหลัก
    component: AssignmentDisplayPage,
    children: [
      { path: '', redirectTo: 'display', pathMatch: 'full' }, // เส้นทางเริ่มต้น
      { path: 'display', component: AssignmentDisplayPage }, // หน้าแสดงผล assignment
    ],
  },
] as Routes;
