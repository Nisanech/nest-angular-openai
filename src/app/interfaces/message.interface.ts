export interface MessageInterface {
	text: string;
	isGpt: boolean;
	info?: {
		userScore?: number;
		errors: string[];
		message: string;
		ok: boolean;
	};
	audioUrl?: string;
	imageInfo?: {
		url: string;
		alt: string;
	};
}
