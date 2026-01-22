// --- ฟังก์ชัน Helper สำหรับแปลง/สร้างข้อมูล Section ---
import { Section, SectionModel, NumberModel } from './types';

// สร้างข้อมูลตัวเลขใหม่
export function createNumber(num?: number): NumberModel {
  return { value: num ?? 0 }; // ถ้าไม่มีค่า ให้ใส่ 0
}

// สร้างข้อมูล Section ใหม่
export function createSection(section?: Section): SectionModel {
  const { numbers } = section ?? {
    numbers: [0], // เริ่มต้นมี 1 ตัวเลข
  };

  return {
    numbers: numbers.map((num) => createNumber(num)), // แปลงทุกตัวเลขเป็น NumberModel
  };
}

// สร้างรายการ Section หลายๆ ตัว
export function createSections(sections?: readonly Section[]): readonly SectionModel[] {
  return (sections ?? [undefined]).map(createSection);
}

// แปลง NumberModel กลับเป็น number ธรรมดา
export function toNumber(numberModel: NumberModel): number {
  return numberModel.value;
}

// แปลง SectionModel กลับเป็น Section
export function toSection(sectionModel: SectionModel): Section {
  const { numbers } = sectionModel;

  return {
    numbers: numbers.map(toNumber), // แปลงทุก NumberModel กลับเป็น number
  };
}

// แปลงรายการ SectionModel ทั้งหมดกลับเป็น Section
export function toSections(sectionsModel: readonly SectionModel[]): readonly Section[] {
  return sectionsModel.map(toSection);
}
