import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
	selector: 'app-chat-message',
	standalone: true,
	imports: [CommonModule, MarkdownModule, NgOptimizedImage],
	templateUrl: './chat-message.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageComponent {
	@Input({ required: true }) text!: string;
	@Input() audioUrl?: string;
	@Input() imageInfo?: { url: string; alt: string };
}
