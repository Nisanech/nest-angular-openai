import {environment} from "environments/environment";

export const prosConsStreamUseCase = async (prompt: string) => {
	try {
		const resp = await fetch(`${environment.backendApi}/pros-cons-discusser-stream`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({prompt})
		})

		if (!resp.ok) throw new Error('No se pudo realizar la peticion')

		const reader = resp.body?.getReader()

		if (!reader) {
			console.log('No se pudo generar el reader')
			throw new Error('No se pudo generar el reader')
		}

		const decoder = new TextDecoder()

		let text = ''

		while (true) {
			const {value, done} = await reader.read()

			if (done) {
				break;
			}

			const decoderChunk = decoder.decode(value, {stream: true})

			text += decoderChunk
			console.log(text)
		}

		return 'ok'
	} catch (e) {
		console.log('error catch', e)
		return null;
	}
}
