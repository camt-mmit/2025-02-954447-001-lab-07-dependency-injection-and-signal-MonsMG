// --- ฟังก์ชัน Helper สำหรับแปลง/สร้างข้อมูล Contact ---
import { Contact, ContactModel, TelModel } from './types';

// สร้างข้อมูล Tel (เบอร์โทร) ใหม่
export function createTel(tel?: string): TelModel {
  return { value: tel ?? '' }; // ถ้าไม่มีค่า ให้ใส่ string ว่าง
}

// สร้างข้อมูล Contact ใหม่ (ถ้าไม่มีข้อมูลเลย ให้ใส่ค่า default)
export function createContact(contact?: Contact): ContactModel {
  const { name, tels } = contact ?? {
    name: '', // ชื่อเริ่มต้นเป็น ""
    tels: [''], // เบอร์เริ่มต้นมี 1 ช่องว่าง
  };

  return {
    name,
    tels: tels.map((tel) => createTel(tel)), // แปลงทุกเบอร์เป็น TelModel
  };
}

// สร้างรายการ Contact หลายๆ ตัว (ถ้าไม่มี ให้สร้างแค่ 1 ตัวว่าง)
export function createContacts(contacts?: readonly Contact[]): readonly ContactModel[] {
  return (contacts ?? [undefined]).map(createContact);
}

// แปลง TelModel กลับเป็น string ธรรมดา
export function toTel(telModel: TelModel): string {
  return telModel.value;
}

// แปลง ContactModel กลับเป็น Contact (ก่อนเซฟข้อมูล)
export function toContact(contactModel: ContactModel): Contact {
  const { name, tels } = contactModel;

  return {
    name,
    tels: tels.map(toTel), // แปลงทุก TelModel กลับเป็น string
  };
}

// แปลงรายการ ContactModel ทั้งหมดกลับเป็น Contact
export function toContacts(contactsModel: readonly ContactModel[]): readonly Contact[] {
  return contactsModel.map(toContact);
}
