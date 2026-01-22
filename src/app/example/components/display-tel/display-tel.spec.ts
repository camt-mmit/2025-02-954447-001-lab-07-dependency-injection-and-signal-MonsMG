// --- Unit Test สำหรับ DisplayTel Component ---
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTel } from './display-tel';

describe('DisplayTel', () => {
  let component: DisplayTel;
  let fixture: ComponentFixture<DisplayTel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayTel],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayTel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  // ทดสอบว่า component สร้างได้สำเร็จ
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
