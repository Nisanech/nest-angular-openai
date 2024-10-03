import {Component, inject, signal} from '@angular/core';

import {
	ChatMessageComponent,
	MyMessageComponent,
	TextMessageBoxComponent,
	TypingLoaderComponent
} from "@components/index"

import {MessageInterface} from "@interfaces/index";

import {OpenAiService} from "@services/index";

@Component({
	selector: 'app-pros-cons-page',
	standalone: true,
	imports: [
		ChatMessageComponent,
		MyMessageComponent,
		TypingLoaderComponent,
		TextMessageBoxComponent
	],
	templateUrl: './pros-cons-page.component.html',
})
export class ProsConsPageComponent {
	public messages = signal<MessageInterface[]>([]);

	public isLoading = signal(false);

	public openAiService = inject(OpenAiService);

	handleMessage(prompt: string) {
		this.messages.update((prev) => [
			...prev,
			{
				isGpt: false,
				text: prompt
			}
		])

		this.isLoading.set(true)

		this.openAiService.prosCons(prompt).subscribe(resp => {
			this.isLoading.set(false)

			this.messages.update((prev) => [
				...prev,
				{
					isGpt: true,
					text: resp.content,
				}
			])
		})
	}

}
