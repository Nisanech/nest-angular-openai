import { Component, inject, signal } from '@angular/core';
import {
	ChatMessageComponent,
	MyMessageComponent,
	TextMessageBoxComponent,
	TypingLoaderComponent,
} from '@components/index';
import { MessageInterface } from '@interfaces/message.interface';
import { OpenAiService } from '@services/openai.service';

@Component({
	selector: 'app-image-generation-page',
	standalone: true,
	imports: [
		ChatMessageComponent,
		MyMessageComponent,
		TypingLoaderComponent,
		TextMessageBoxComponent,
	],
	templateUrl: './image-generation-page.component.html',
})
export class ImageGenerationPageComponent {
	public messages = signal<MessageInterface[]>([]);

	public isLoading = signal(false);

	public openAiService = inject(OpenAiService);

	handleMessage(prompt: string) {
		this.isLoading.set(true);

		this.messages.update((prev) => [...prev, { isGpt: false, text: prompt }]);

		this.openAiService.imageGeneration(prompt).subscribe((resp) => {
			this.isLoading.set(false);

			if (!resp) return;

			this.messages.update((prev) => [
				...prev,
				{ isGpt: true, text: resp.alt, imageInfo: resp },
			]);
		});
	}
}
