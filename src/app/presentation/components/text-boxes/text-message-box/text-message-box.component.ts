import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	inject,
	Input,
	Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-text-message-box',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './text-message-box.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxComponent {
	@Input() placeholder: string = '';
	@Input() disableCorrections: boolean = false;

	@Output() onMessage = new EventEmitter<string>();

	public formBuilder = inject(FormBuilder);

	public form = this.formBuilder.group({
		prompt: ['', Validators.required],
	});

	handleSubmit() {
		if (this.form.invalid) return;

		const { prompt } = this.form.value;
		console.log({ prompt });

		this.onMessage.emit(prompt ?? '');

		this.form.reset();
	}
}
