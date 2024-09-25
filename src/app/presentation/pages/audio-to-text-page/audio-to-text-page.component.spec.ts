import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioToTextPageComponent } from './audio-to-text-page.component';

describe('AudioToTextPageComponent', () => {
  let component: AudioToTextPageComponent;
  let fixture: ComponentFixture<AudioToTextPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioToTextPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioToTextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
