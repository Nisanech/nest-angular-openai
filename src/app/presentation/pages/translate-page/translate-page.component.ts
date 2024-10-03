import {Component, inject, signal} from '@angular/core';

import {
	ChatMessageComponent,
	MyMessageComponent,
	TextMessageBoxEvent,
	TextMessageBoxSelectComponent,
	TypingLoaderComponent
} from "@components/index";

import {MessageInterface} from "@interfaces/index";
import {OpenAiService} from "@services/index";

@Component({
	selector: 'app-translate-page',
	standalone: true,
	imports: [
		ChatMessageComponent,
		MyMessageComponent,
		TypingLoaderComponent,
		TextMessageBoxSelectComponent
	],
	templateUrl: './translate-page.component.html',
})
export class TranslatePageComponent {
	public messages = signal<MessageInterface[]>([]);

	public isLoading = signal(false);

	public languages = signal([
		{id: 'alemán', text: 'Alemán'},
		{id: 'árabe', text: 'Árabe'},
		{id: 'bengalí', text: 'Bengalí'},
		{id: 'francés', text: 'Francés'},
		{id: 'hindi', text: 'Hindi'},
		{id: 'inglés', text: 'Inglés'},
		{id: 'japonés', text: 'Japonés'},
		{id: 'mandarín', text: 'Mandarín'},
		{id: 'portugués', text: 'Portugués'},
		{id: 'ruso', text: 'Ruso'},
	]);

	public openAiService = inject(OpenAiService);

	handleMessageWithSelect({prompt, selectedOption}: TextMessageBoxEvent) {
		const message = `Traduce a ${selectedOption}: ${prompt}`;

		this.isLoading.set(true);

		this.messages.update(prev => [...prev, {text: message, isGpt: false}])

		this.openAiService.translate(prompt, selectedOption).subscribe(({message}) => {
			this.isLoading.set(false);

			this.messages.update((prev) => [...prev, {text: message, isGpt: true}]);
		})
	}
}
