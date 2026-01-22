// --- Unit Test สำหรับ DynamicContact Component ---
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContact } from './dynamic-contact';

describe('DynamicContact', () => {
  let component: DynamicContact;
  let fixture: ComponentFixture<DynamicContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicContact],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  // ทดสอบว่า component สร้างได้สำเร็จ
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
