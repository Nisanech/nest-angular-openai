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

export interface TextMessageEvent {
	file: File;
	prompt?: string | null;
}

@Component({
	selector: 'app-text-message-box-file',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './text-message-box-file.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxFileComponent {
	@Input() placeholder: string = '';

	@Output() onMessage = new EventEmitter<TextMessageEvent>();

	public formBuilder = inject(FormBuilder);

	public form = this.formBuilder.group({
		prompt: [],
		file: [null, Validators.required],
	});

	public file: File | undefined;

	handleSelectedFile(event: any) {
		const file = event.target.files.item(0);

		this.form.controls.file.setValue(file);

		console.log(file);
	}

	handleSubmit() {
		if (this.form.invalid) return;

		const { file, prompt } = this.form.value;

		this.onMessage.emit({ prompt, file: file! });

		this.form.reset();
	}
}
