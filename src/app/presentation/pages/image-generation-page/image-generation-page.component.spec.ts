import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGenerationPageComponent } from './image-generation-page.component';

describe('ImageGenerationPageComponent', () => {
  let component: ImageGenerationPageComponent;
  let fixture: ComponentFixture<ImageGenerationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageGenerationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageGenerationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
