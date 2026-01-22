// --- กำหนด Type สำหรับ Assignment (Section และ Number) ---

// ข้อมูล Section ที่เก็บไว้
export interface Section {
  readonly numbers: readonly number[]; // รายการตัวเลขใน section
}

// โมเดลสำหรับตัวเลขแต่ละตัว (ใช้ใน form)
export interface NumberModel {
  value: number;
}

// โมเดลสำหรับ Section (ใช้ใน form)
export interface SectionModel {
  numbers: readonly NumberModel[]; // รายการตัวเลขในรูปแบบ model
}
