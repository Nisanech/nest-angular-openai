import {Injectable} from '@angular/core';
import {from} from "rxjs";

import {orthographyUseCase, prosConsStreamUseCase, prosConsUseCase, TranslateUseCase} from "@use-cases/index";

@Injectable({
	providedIn: 'root',
})
export class OpenAiService {
	constructor() {}

	checkOrthography(prompt: string) {
		return from(orthographyUseCase(prompt))
	}

	prosCons(prompt: string) {
		return from(prosConsUseCase(prompt))
	}

	prosConsStreamDiscusser(prompt: string, abortSignal: AbortSignal) {
		return prosConsStreamUseCase(prompt, abortSignal);
	}

	translate(prompt: string, language: string) {
		return from(TranslateUseCase(prompt, language))
	}
}
