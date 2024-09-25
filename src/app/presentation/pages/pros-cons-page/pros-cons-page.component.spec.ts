import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsConsPageComponent } from './pros-cons-page.component';

describe('ProsConsPageComponent', () => {
  let component: ProsConsPageComponent;
  let fixture: ComponentFixture<ProsConsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProsConsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProsConsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
