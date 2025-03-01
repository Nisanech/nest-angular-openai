import { Component, inject, signal } from '@angular/core';

import {
	ChatMessageComponent,
	MyMessageComponent,
	TextMessageBoxEvent,
	TextMessageEvent,
	TypingLoaderComponent,
} from '@components/index';

import { MessageInterface } from '@interfaces/index';
import { OpenAiService } from '@services/index';

@Component({
	selector: 'app-chat-template',
	standalone: true,
	imports: [ChatMessageComponent, MyMessageComponent, TypingLoaderComponent],
	templateUrl: './chat-template.component.html',
})
export class ChatTemplateComponent {
	public messages = signal<MessageInterface[]>([]);

	public isLoading = signal(false);

	public openAiService = inject(OpenAiService);

	handleMessage(prompt: string) {
		console.log(prompt);
	}

	handleMessageWithFile({ prompt, file }: TextMessageEvent) {
		console.log({ prompt, file });
	}

	handleMessageWithSelect(event: TextMessageBoxEvent) {
		console.log(event);
	}
}
