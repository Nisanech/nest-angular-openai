import {Component, inject, signal} from '@angular/core';
import {ChatMessageComponent} from "@components/chat-bubbles/chat-message/chat-message.component";
import {MyMessageComponent} from "@components/chat-bubbles/my-message/my-message.component";
import {TypingLoaderComponent} from "@components/typing-loader/typing-loader.component";
import {MessageInterface} from "@interfaces/message.interface";
import {OpenAiService} from "@services/openai.service";
import {TextMessageBoxComponent} from "@components/text-boxes/text-message-box/text-message-box.component";

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
