import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTextInputComponent } from './my-text-input.component';

describe('MyTextInputComponent', () => {
  let component: MyTextInputComponent;
  let fixture: ComponentFixture<MyTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
