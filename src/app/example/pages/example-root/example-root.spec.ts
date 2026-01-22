// --- Unit Test สำหรับ ExampleRoot Component ---
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRoot } from './example-root';

describe('ExampleRoot', () => {
  let component: ExampleRoot;
  let fixture: ComponentFixture<ExampleRoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleRoot],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleRoot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  // ทดสอบว่า component สร้างได้สำเร็จ
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
