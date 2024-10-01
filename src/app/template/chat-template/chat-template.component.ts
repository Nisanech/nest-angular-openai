import {Component, inject, signal} from '@angular/core';
import {ChatMessageComponent} from '@components/chat-bubbles/chat-message/chat-message.component';
import {MyMessageComponent} from '@components/chat-bubbles/my-message/my-message.component';
import {
	TextMessageBoxEvent,
	TextMessageBoxSelectComponent,
} from '@components/text-boxes/text-message-box-select/text-message-box-select.component';
import {TypingLoaderComponent} from '@components/typing-loader/typing-loader.component';
import {MessageInterface} from '@interfaces/message.interface';
import {OpenAiService} from '@services/openai.service';
import {TextMessageEvent} from '@components/text-boxes/text-message-box-file/text-message-box-file.component';

@Component({
	selector: 'app-chat-template',
	standalone: true,
	imports: [
		ChatMessageComponent,
		MyMessageComponent,
		TextMessageBoxSelectComponent,
		TypingLoaderComponent,
	],
	templateUrl: './chat-template.component.html',
})
export class ChatTemplateComponent {
	public messages = signal<MessageInterface[]>([]);

	public isLoading = signal(false);

	public openAiService = inject(OpenAiService);

	handleMessage(prompt: string) {
		console.log(prompt);
	}

	handleMessageWithFile({prompt, file}: TextMessageEvent) {
		console.log({prompt, file});
	}

	handleMessageWithSelect(event: TextMessageBoxEvent) {
		console.log(event);
	}
}
