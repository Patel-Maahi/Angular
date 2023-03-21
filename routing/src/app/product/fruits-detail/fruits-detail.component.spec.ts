import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsDetailComponent } from './fruits-detail.component';

describe('FruitsDetailComponent', () => {
  let component: FruitsDetailComponent;
  let fixture: ComponentFixture<FruitsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
