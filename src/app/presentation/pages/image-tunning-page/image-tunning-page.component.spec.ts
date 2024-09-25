import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTunningPageComponent } from './image-tunning-page.component';

describe('ImageTunningPageComponent', () => {
  let component: ImageTunningPageComponent;
  let fixture: ComponentFixture<ImageTunningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTunningPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageTunningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
