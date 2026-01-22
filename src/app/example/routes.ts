// --- กำหนดเส้นทาง (Routes) สำหรับแอป Angular ---
import { Routes } from '@angular/router';
import { ExampleRoot } from './pages/example-root/example-root';
import { ExampleDisplayPage } from './pages/example-display-page/example-display-page';
import { ExampleUpdatePage } from './pages/example-update-page/example-update-page';

export default [
  {
    path: '', // เส้นทางหลัก (root)
    component: ExampleRoot, // ใช้ ExampleRoot เป็นกรอบนอก
    children: [
      // เส้นทางย่อย (children routes)
      { path: '', redirectTo: 'display', pathMatch: 'full' }, // เปิดมาเจอหน้าแรก ให้เด้งไป /display
      { path: 'display', component: ExampleDisplayPage }, // หน้าแสดงรายชื่อ
      { path: 'update', component: ExampleUpdatePage }, // หน้าแก้ไข/เพิ่มรายชื่อ
    ],
  },
] as Routes;
