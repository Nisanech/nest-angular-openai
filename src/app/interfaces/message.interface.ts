export interface MessageInterface {
	text: string;
	isGpt: boolean;
	info?: {
		userScore?: number,
		errors: string[],
		message: string,
		ok: boolean,
	}
}
