import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { Card } from '../model/card';
import { CardsService } from './cards.service';

describe('Test for CardsService', () => {
  let service: CardsService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      declarations: [
        AppComponent
      ],      
    }).compileComponents;
    service = TestBed.inject(CardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('CardsService.getAllCard', () => {
      it('it is not empty', () => {
        expect(service.getAllCard).not.toEqual(null);
      });
      
      it('should return object', () => {
        let list = service.getAllCard;
        expect(list.length >0).toBeTrue;
      });

  });

});
