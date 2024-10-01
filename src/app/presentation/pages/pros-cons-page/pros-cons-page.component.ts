import {Component, inject, signal} from '@angular/core';
import {ChatMessageComponent} from "@components/chat-bubbles/chat-message/chat-message.component";
import {MyMessageComponent} from "@components/chat-bubbles/my-message/my-message.component";
import {TypingLoaderComponent} from "@components/typing-loader/typing-loader.component";
import {MessageInterface} from "@interfaces/message.interface";
import {OpenAiService} from "@services/openai.service";
import {TextMessageBoxComponent} from "@components/text-boxes/text-message-box/text-message-box.component";

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
