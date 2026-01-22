// นำเข้า Injectable decorator จาก Angular core เพื่อทำให้ class นี้เป็น service
import { Injectable } from '@angular/core';
// นำเข้า type Section เพื่อใช้กำหนดชนิดข้อมูล
import { Section } from '../types';

/**
 * SectionStorage Service
 *
 * หน้าที่: เป็นตัวจัดการข้อมูล Section (เซคชั่น/กลุ่มเรียน) โดยเก็บไว้ใน localStorage
 * เปรียบเทียน: เหมือนเป็น "คลังเก็บของ" ที่ช่วยบันทึกและดึงข้อมูลออกมาใช้งาน
 */
@Injectable({
  providedIn: 'root', // บอก Angular ว่าสร้าง service นี้แค่ครั้งเดียวสำหรับทั้งแอป (Singleton)
})
export class SectionStorage {
  // กำหนดชื่อ key ที่ใช้เก็บข้อมูลใน localStorage
  // private = ใช้ได้แค่ใน class นี้, readonly = ห้ามแก้ไขค่าหลังประกาศ
  private readonly keyName = `ng-section-data` as const;

  /**
   * ดึงข้อมูล Section ออกมาจาก localStorage
   *
   * @returns อาร์เรย์ของ Section หรือ null ถ้าไม่มีข้อมูล
   *
   * วิธีการทำงาน:
   * 1. ดึงข้อมูล JSON text จาก localStorage ด้วย key ที่กำหนด
   * 2. แปลง JSON text กลับเป็น JavaScript object ด้วย JSON.parse()
   * 3. ถ้าไม่มีข้อมูล (?? 'null') จะคืนค่า null
   */
  get(): readonly Section[] | null {
    // ดึงข้อมูลจาก localStorage (ได้เป็น string)
    const jsonText = localStorage.getItem(this.keyName);

    // แปลง string กลับเป็น array ของ Section
    return JSON.parse(jsonText ?? 'null');
  }

  /**
   * บันทึกข้อมูล Section ลงใน localStorage
   *
   * @param data อาร์เรย์ของ Section ที่ต้องการบันทึก
   *
   * วิธีการทำงาน:
   * 1. แปลงข้อมูล array เป็น JSON text ด้วย JSON.stringify()
   * 2. เก็บ JSON text ลงใน localStorage ด้วย key ที่กำหนด
   */
  set(data: readonly Section[]): void {
    // แปลง array เป็น JSON text (string)
    const jsonText = JSON.stringify(data);

    // บันทึกลง localStorage
    localStorage.setItem(this.keyName, jsonText);
  }
}
