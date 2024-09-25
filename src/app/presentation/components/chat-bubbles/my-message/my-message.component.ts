import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-my-message',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './my-message.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyMessageComponent {
	@Input({ required: true }) text!: string;
}
