import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditPostComponent } from './card-edit-post.component';

describe('CardEditPostComponent', () => {
  let component: CardEditPostComponent;
  let fixture: ComponentFixture<CardEditPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEditPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
