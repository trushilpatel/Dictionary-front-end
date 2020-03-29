import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineWordComponent } from './define-word.component';

describe('DefineWordComponent', () => {
  let component: DefineWordComponent;
  let fixture: ComponentFixture<DefineWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefineWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
