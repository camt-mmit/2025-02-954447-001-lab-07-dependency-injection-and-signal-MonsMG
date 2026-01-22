// --- จุดเริ่มต้นของ Angular Application ---
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// เปิดตัวแอป Angular (เหมือนกดสตาร์ทเครื่องยนต์)
bootstrapApplication(App, appConfig).catch((err) => console.error(err)); // ถ้า error จะพิมพ์ออกมา
