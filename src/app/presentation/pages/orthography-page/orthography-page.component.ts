import {
	ChangeDetectionStrategy,
	Component,
	inject,
	signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	ChatMessageComponent,
	MyMessageComponent,
	TextMessageBoxComponent,
	TextMessageBoxEvent,
	TextMessageBoxFileComponent,
	TextMessageBoxSelectComponent,
	TextMessageEvent,
	TypingLoaderComponent,
} from '@components/index';
import { MessageInterface } from '@interfaces/message.interface';
import { OpenAiService } from '@services/openai.service';

@Component({
	selector: 'app-orthography-page',
	standalone: true,
	imports: [
		CommonModule,

		ChatMessageComponent,
		MyMessageComponent,

		TypingLoaderComponent,

		TextMessageBoxComponent,
		TextMessageBoxFileComponent,
		TextMessageBoxSelectComponent,
	],
	templateUrl: './orthography-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrthographyPageComponent {
	public messages = signal<MessageInterface[]>([
		{ text: 'Hola mundo Signal', isGpt: true },
	]);

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
