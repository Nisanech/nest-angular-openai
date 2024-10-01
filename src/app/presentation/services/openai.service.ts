import {Injectable} from '@angular/core';
import {from} from "rxjs";
import {orthographyUseCase} from "@use-cases/orthography/orthography.use-case";
import {prosConsUseCase} from "@use-cases/pros-cons/pros-cons.use-case";
import {prosConsStreamUseCase} from "@use-cases/pros-cons/pros-cons-stream.use-case";

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

	prosConsStreamDiscusser(prompt: string) {
		return prosConsStreamUseCase(prompt)
	}
}
