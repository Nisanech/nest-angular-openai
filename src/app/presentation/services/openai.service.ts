import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import {
	AudioToTextUseCase,
	imageGenerationUseCase,
	imageVariationUseCase,
	orthographyUseCase,
	prosConsStreamUseCase,
	prosConsUseCase,
	TextToAudioUseCase,
	TranslateUseCase,
} from '@use-cases/index';

@Injectable({
	providedIn: 'root',
})
export class OpenAiService {
	constructor() {}

	checkOrthography(prompt: string) {
		return from(orthographyUseCase(prompt));
	}

	prosCons(prompt: string) {
		return from(prosConsUseCase(prompt));
	}

	prosConsStreamDiscusser(prompt: string, abortSignal: AbortSignal) {
		return prosConsStreamUseCase(prompt, abortSignal);
	}

	translate(prompt: string, language: string) {
		return from(TranslateUseCase(prompt, language));
	}

	textToAudio(prompt: string, voice: string) {
		return from(TextToAudioUseCase(prompt, voice));
	}

	audioToText(file: File, prompt?: string) {
		return from(AudioToTextUseCase(file, prompt));
	}

	imageGeneration(prompt: string, originalImage?: string, maskImage?: string) {
		return from(imageGenerationUseCase(prompt, originalImage, maskImage));
	}

	imageVariation(originalImage: string) {
		return from(imageVariationUseCase(originalImage));
	}
}
