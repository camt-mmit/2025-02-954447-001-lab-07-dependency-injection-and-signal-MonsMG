// --- Unit Test สำหรับ ExampleUpdatePage Component ---
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleUpdatePage } from './example-update-page';

describe('ExampleUpdatePage', () => {
  let component: ExampleUpdatePage;
  let fixture: ComponentFixture<ExampleUpdatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleUpdatePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleUpdatePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  // ทดสอบว่า component สร้างได้สำเร็จ
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
