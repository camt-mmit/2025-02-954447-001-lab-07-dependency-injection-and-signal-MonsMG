// --- Unit Test สำหรับ ContactStorage Service ---
import { TestBed } from '@angular/core/testing';

import { ContactStorage } from './contact.storage';

describe('ContactStorage', () => {
  let service: ContactStorage;

  // ตั้งค่าก่อนการทดสอบแต่ละครั้ง
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactStorage); // สร้าง instance ของ service
  });

  // ทดสอบว่า service สร้างได้สำเร็จ
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
