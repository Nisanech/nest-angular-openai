import {ChangeDetectionStrategy, Component, inject, signal,} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
	ChatMessageComponent,
	GptMessageOrthographyComponent,
	MyMessageComponent,
	TextMessageBoxComponent,
	TextMessageBoxFileComponent,
	TextMessageBoxSelectComponent,
	TypingLoaderComponent,
} from '@components/index';

import {MessageInterface} from '@interfaces/index';

import {OpenAiService} from '@services/index';

@Component({
	selector: 'app-orthography-page',
	standalone: true,
	imports: [
		CommonModule,

		ChatMessageComponent,
		GptMessageOrthographyComponent,
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
	public messages = signal<MessageInterface[]>([]);

	public isLoading = signal(false);

	public openAiService = inject(OpenAiService);

	handleMessage(prompt: string) {
		this.isLoading.set(true)

		this.messages.update((prev) => [
			...prev,
			{
				isGpt: false,
				text: prompt
			}
		])

		this.openAiService.checkOrthography(prompt).subscribe(resp => {
			this.isLoading.set(false)

			this.messages.update(prev => [
				...prev,
				{
					isGpt: true,
					text: resp.message,
					info: resp
				}
			])
		})
	}
}
