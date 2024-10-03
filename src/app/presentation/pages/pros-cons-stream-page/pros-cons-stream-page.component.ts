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
	selector: 'app-pros-cons-stream-page',
	standalone: true,
	imports: [
		ChatMessageComponent,
		MyMessageComponent,
		TypingLoaderComponent,
		TextMessageBoxComponent
	],
	templateUrl: './pros-cons-stream-page.component.html',
})
export class ProsConsStreamPageComponent {
	public messages = signal<MessageInterface[]>([]);

	public isLoading = signal(false);

	public openAiService = inject(OpenAiService);

	public abortSignal = new AbortController()

	async handleMessage(prompt: string) {
		this.abortSignal.abort()

		this.abortSignal = new AbortController()

		this.messages.update(prev => [
			...prev,
			{
				isGpt: false,
				text: prompt
			},
			{
				isGpt: true,
				text: '...'
			}
		])

		this.isLoading.set(true)

		const stream = this.openAiService.prosConsStreamDiscusser(prompt, this.abortSignal.signal)

		this.isLoading.set(false)

		for await (const text of stream) {
			this.handleStreamResponse(text)
		}
	}

	handleStreamResponse(message: string) {
		this.messages().pop()

		const messages = this.messages()

		this.messages.set([...messages, {isGpt: true, text: message}])
	}
}
