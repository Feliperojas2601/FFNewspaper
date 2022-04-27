import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeppComponent } from './depp.component';

describe('DeppComponent', () => {
  let component: DeppComponent;
  let fixture: ComponentFixture<DeppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
