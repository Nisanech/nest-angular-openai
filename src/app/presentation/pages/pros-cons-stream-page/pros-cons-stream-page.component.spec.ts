import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsConsStreamPageComponent } from './pros-cons-stream-page.component';

describe('ProsConsStreamPageComponent', () => {
  let component: ProsConsStreamPageComponent;
  let fixture: ComponentFixture<ProsConsStreamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProsConsStreamPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProsConsStreamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
