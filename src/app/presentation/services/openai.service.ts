import {Injectable} from '@angular/core';
import {from} from "rxjs";
import {orthographyUseCase} from "@use-cases/orthography/orthography.use-case";

@Injectable({
	providedIn: 'root',
})
export class OpenAiService {
	constructor() {}

	checkOrthography(prompt: string) {
		return from(orthographyUseCase(prompt))
	}
}
