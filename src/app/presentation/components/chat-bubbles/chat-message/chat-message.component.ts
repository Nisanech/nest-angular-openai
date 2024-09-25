import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-chat-message',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './chat-message.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageComponent {
	@Input({ required: true }) text!: string;
}
