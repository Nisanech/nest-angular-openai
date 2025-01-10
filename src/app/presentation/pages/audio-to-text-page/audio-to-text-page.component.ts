import { Component, inject, signal } from '@angular/core';
import { ChatMessageComponent } from '@components/chat-bubbles/chat-message/chat-message.component';
import { MyMessageComponent } from '@components/chat-bubbles/my-message/my-message.component';
import { TypingLoaderComponent } from '@components/typing-loader/typing-loader.component';
import { MessageInterface } from '@interfaces/message.interface';
import { OpenAiService } from '@services/openai.service';
import {
	TextMessageBoxFileComponent,
	TextMessageEvent,
} from '@components/text-boxes/text-message-box-file/text-message-box-file.component';
import { AudioToTextResponse } from '@interfaces/audio-text.response';

@Component({
	selector: 'app-audio-to-text-page',
	standalone: true,
	imports: [
		ChatMessageComponent,
		MyMessageComponent,
		TypingLoaderComponent,
		TextMessageBoxFileComponent,
	],
	templateUrl: './audio-to-text-page.component.html',
	styleUrl: './audio-to-text-page.component.css',
})
export class AudioToTextPageComponent {
	public messages = signal<MessageInterface[]>([]);

	public isLoading = signal(false);

	public openAiService = inject(OpenAiService);

	handleMessageWithFile({ prompt, file }: TextMessageEvent) {
		const text = prompt ?? file.name ?? 'Transcribe el audio';

		this.isLoading.set(true);

		this.messages.update((prev) => [...prev, { isGpt: false, text: text }]);

		this.openAiService
			.audioToText(file, text)
			.subscribe((resp) => this.handleResponse(resp));
	}

	handleResponse(resp: AudioToTextResponse | null) {
		this.isLoading.set(false);

		if (!resp) return;

		const text = `## Transcripcion:
		 __Duracion:__ ${Math.round(resp.duration)} segundos.

		 ## El texto es:
		 ${resp.text}`;

		this.messages.update((prev) => [...prev, { isGpt: true, text: text }]);

		for (const segment of resp.segments) {
			const segmentMessage = `__De ${Math.round(segment.start)} a ${Math.round(segment.end)} segundos.__
			${segment.text}`;

			this.messages.update((prev) => [
				...prev,
				{ isGpt: true, text: segmentMessage },
			]);
		}
	}
}
