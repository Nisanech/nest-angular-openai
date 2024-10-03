import {environment} from "environments/environment";
import type {TranslateResponse,} from "@interfaces/index";

export const TranslateUseCase = async (prompt: string, language: string) => {
	try {
		const resp = await fetch(`${environment.backendApi}/translate`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({prompt, language})
		})

		if (!resp.ok) throw new Error('No se pudo realizar la traduccion')

		const {message} = await resp.json() as TranslateResponse

		return {
			ok: true,
			message: message
		}
	} catch (e) {
		console.log(e)

		return {
			ok: false,
			message: 'No se pudo realizar la traduccion'
		}
	}
}
