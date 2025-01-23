import { Component, inject, signal } from '@angular/core';
import { MessageInterface } from '@interfaces/message.interface';
import { OpenAiService } from '@services/openai.service';
import {
	ChatMessageComponent,
	GptMessageEditableImageComponent,
	MyMessageComponent,
	TextMessageBoxComponent,
	TypingLoaderComponent,
} from '@components/index';
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-image-tunning-page',
	standalone: true,
	imports: [
		ChatMessageComponent,
		MyMessageComponent,
		TypingLoaderComponent,
		TextMessageBoxComponent,
		NgOptimizedImage,
		GptMessageEditableImageComponent,
	],
	templateUrl: './image-tunning-page.component.html',
})
export class ImageTunningPageComponent {
	public messages = signal<MessageInterface[]>([
		// {
		// 	isGpt: true,
		// 	text: 'Dummy image',
		// 	imageInfo: {
		// 		alt: 'Dummy image',
		// 		url: 'http://localhost:3000/gpt/image-generator/1736562031112.png',
		// 	},
		// },
	]);

	public isLoading = signal(false);

	public openAiService = inject(OpenAiService);

	public originalImage = signal<string>('');
	public maskImage = signal<string | undefined>(undefined);

	handleMessage(prompt: string) {
		this.isLoading.set(true);

		this.messages.update((prev) => [...prev, { isGpt: false, text: prompt }]);

		this.openAiService
			.imageGeneration(prompt, this.originalImage(), this.maskImage())
			.subscribe((resp) => {
				this.isLoading.set(false);

				if (!resp) return;

				this.messages.update((prev) => [
					...prev,
					{ isGpt: true, text: resp.alt, imageInfo: resp },
				]);
			});
	}

	generateVariation() {
		if (this.originalImage() === '') return;

		this.isLoading.set(true);

		this.openAiService
			.imageVariation(this.originalImage()!)
			.subscribe((resp) => {
				this.isLoading.set(false);

				if (!resp) return;

				this.messages.update((prev) => [
					...prev,
					{
						isGpt: true,
						text: resp.alt,
						imageInfo: resp,
					},
				]);
			});
	}

	handleImageChange(newImage: string, originalImage: string) {
		this.originalImage.set(originalImage);
		this.maskImage.set(newImage);
	}
}
