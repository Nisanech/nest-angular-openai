import { Component, inject, signal } from '@angular/core';

import {
	ChatMessageComponent,
	MyMessageComponent,
	TextMessageBoxEvent,
	TextMessageBoxSelectComponent,
	TypingLoaderComponent,
} from '@components/index';

import { MessageInterface } from '@interfaces/message.interface';

import { OpenAiService } from '@services/index';

@Component({
	selector: 'app-text-to-audio-page',
	standalone: true,
	imports: [
		ChatMessageComponent,
		MyMessageComponent,
		TypingLoaderComponent,
		TextMessageBoxSelectComponent,
	],
	templateUrl: './text-to-audio-page.component.html',
})
export class TextToAudioPageComponent {
	public messages = signal<MessageInterface[]>([]);

	public isLoading = signal(false);

	public openAiService = inject(OpenAiService);

	public voices = signal([
		{ id: 'nova', text: 'Nova' },
		{ id: 'alloy', text: 'Alloy' },
		{ id: 'echo', text: 'Echo' },
		{ id: 'fable', text: 'Fable' },
		{ id: 'onyx', text: 'Onyx' },
		{ id: 'shimmer', text: 'Shimmer' },
	]);

	handleMessageWithSelect({ prompt, selectedOption }: TextMessageBoxEvent) {
		const message = `${selectedOption} - ${prompt}`;

		this.messages.update((prev) => [...prev, { text: message, isGpt: false }]);

		this.isLoading.set(true);

		this.openAiService
			.textToAudio(prompt, selectedOption)
			.subscribe(({ message, audioUrl }) => {
				this.isLoading.set(false);

				this.messages.update((prev) => [
					...prev,
					{ isGpt: true, text: message, audioUrl: audioUrl },
				]);
			});
	}
}
