// นำเข้า Injectable, APP_ID, และ inject จาก Angular core
// Injectable = ทำให้ class เป็น service, APP_ID = ID ของแอป, inject = ฉีดค่าเข้ามาใช้
import { Injectable, APP_ID, inject } from '@angular/core';
// นำเข้า type Contact เพื่อใช้กำหนดชนิดข้อมูล
import { Contact } from '../types';

/**
 * ContactStorage Service
 *
 * หน้าที่: เป็นตัวจัดการข้อมูล Contact (ผู้ติดต่อ) โดยเก็บไว้ใน localStorage
 * เปรียบเทียน: เหมือนเป็น "สมุดโทรศัพท์ดิจิทัล" ที่บันทึกและดึงข้อมูลติดต่อ
 */
@Injectable({
  providedIn: 'root', // บอก Angular ว่าสร้าง service นี้แค่ครั้งเดียวสำหรับทั้งแอป (Singleton)
})
export class ContactStorage {
  // กำหนดชื่อ key โดยใช้ APP_ID มาต่อท้าย เพื่อให้แต่ละแอปมี key ที่ไม่ซ้ำกัน
  // ตัวอย่าง: ถ้า APP_ID = 'my-app' จะได้ key = 'my-app-contact-storage'
  // inject(APP_ID) = ดึงค่า APP_ID มาใช้งาน
  private readonly keyName = `${inject(APP_ID)}-contact-storage` as const;

  /**
   * ดึงข้อมูล Contact ออกมาจาก localStorage
   *
   * @returns อาร์เรย์ของ Contact หรือ null ถ้าไม่มีข้อมูล
   *
   * วิธีการทำงาน:
   * 1. ดึงข้อมูล JSON text จาก localStorage ด้วย key ที่กำหนด
   * 2. แปลง JSON text กลับเป็น JavaScript object ด้วย JSON.parse()
   * 3. ถ้าไม่มีข้อมูล (?? 'null') จะคืนค่า null
   */
  get(): readonly Contact[] | null {
    // ดึงข้อมูลจาก localStorage (ได้เป็น string)
    const jsonText = localStorage.getItem(this.keyName);

    // แปลง string กลับเป็น array ของ Contact
    return JSON.parse(jsonText ?? 'null');
  }

  /**
   * บันทึกข้อมูล Contact ลงใน localStorage
   *
   * @param data อาร์เรย์ของ Contact ที่ต้องการบันทึก
   *
   * วิธีการทำงาน:
   * 1. แปลงข้อมูล array เป็น JSON text ด้วย JSON.stringify()
   * 2. เก็บ JSON text ลงใน localStorage ด้วย key ที่กำหนด
   */
  set(data: readonly Contact[]): void {
    // แปลง array เป็น JSON text (string)
    const jsonText = JSON.stringify(data);

    // บันทึกลง localStorage
    localStorage.setItem(this.keyName, jsonText);
  }
}
