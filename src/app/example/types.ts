// --- กำหนด Type (โครงสร้างข้อมูล) สำหรับ Contact ---

// ข้อมูล Contact ที่เก็บไว้ (แบบ readonly ไม่ให้แก้ไข)
export interface Contact {
  readonly name: string; // ชื่อ
  readonly tels: readonly string[]; // รายการเบอร์โทร (เป็น array)
}

// โมเดลสำหรับเบอร์โทรแต่ละตัว (ใช้ใน form)
export interface TelModel {
  value: string; // ค่าเบอร์โทร
}

// โมเดลสำหรับ Contact ทั้งหมด (ใช้ใน form)
export interface ContactModel {
  name: string; // ชื่อ (แก้ไขได้)
  tels: readonly TelModel[]; // รายการเบอร์ในรูปแบบ model
}
