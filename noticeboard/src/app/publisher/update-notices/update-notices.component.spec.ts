import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNoticesComponent } from './update-notices.component';

describe('UpdateNoticesComponent', () => {
  let component: UpdateNoticesComponent;
  let fixture: ComponentFixture<UpdateNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNoticesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
