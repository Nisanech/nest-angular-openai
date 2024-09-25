import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToAudioPageComponent } from './text-to-audio-page.component';

describe('TextToAudioPageComponent', () => {
  let component: TextToAudioPageComponent;
  let fixture: ComponentFixture<TextToAudioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextToAudioPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextToAudioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
