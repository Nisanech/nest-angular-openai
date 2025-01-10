import { environment } from '../../../../environments/environment';
import { AudioToTextResponse } from '@interfaces/audio-text.response';

export const AudioToTextUseCase = async (audioFile: File, prompt?: string) => {
	try {
		const formData = new FormData();

		formData.append('file', audioFile);

		if (prompt) {
			formData.append('prompt', prompt);
		}

		const resp = await fetch(`${environment.backendApi}/audio-to-text`, {
			method: 'POST',
			body: formData,
		});
		console.log('resp use case', resp);

		const data = (await resp.json()) as AudioToTextResponse;

		return data;
	} catch (error) {
		return null;
	}
};
