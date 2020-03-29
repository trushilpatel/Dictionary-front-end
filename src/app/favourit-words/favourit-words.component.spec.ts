import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritWordsComponent } from './favourit-words.component';

describe('FavouritWordsComponent', () => {
  let component: FavouritWordsComponent;
  let fixture: ComponentFixture<FavouritWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
