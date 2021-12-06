import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardPostsComponent } from './card-posts.component';


describe('CardPostsComponent', () => {
  let component: CardPostsComponent;
  let fixture: ComponentFixture<CardPostsComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      declarations: [ CardPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('CardPostsComponent.loadAll', () => {
    it('it is not empty', () => {
      expect(component.loadAll).not.toEqual(null);
    });
  });
});
