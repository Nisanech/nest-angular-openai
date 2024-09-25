import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './presentation/layouts/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
	{
		path: '',
		component: DashboardLayoutComponent,
		children: [
			{
				path: 'orthography',
				data: {
					icon: 'fa-solid fa-spell-check',
					title: 'Ortografía',
					description: 'Corregir ortografía',
				},
				loadComponent: () =>
					import(
						'./presentation/pages/orthography-page/orthography-page.component'
					).then((m) => m.OrthographyPageComponent),
			},
			{
				path: 'pros-cons',
				data: {
					icon: 'fa-solid fa-code-compare',
					title: 'Pros & Cons',
					description: 'Comparar pros y contras',
				},
				loadComponent: () =>
					import(
						'./presentation/pages/pros-cons-page/pros-cons-page.component'
					).then((m) => m.ProsConsPageComponent),
			},
			{
				path: 'pros-cons-stream',
				data: {
					icon: 'fa-solid fa-water',
					title: 'Como stream',
					description: 'Con stream de mensajes',
				},
				loadComponent: () =>
					import(
						'./presentation/pages/pros-cons-stream-page/pros-cons-stream-page.component'
					).then((m) => m.ProsConsStreamPageComponent),
			},
			{
				path: 'translate',
				data: {
					icon: 'fa-solid fa-language',
					title: 'Traducir',
					description: 'Textos a otros idiomas',
				},
				loadComponent: () =>
					import(
						'./presentation/pages/translate-page/translate-page.component'
					).then((m) => m.TranslatePageComponent),
			},
			{
				path: 'text-to-audio',
				data: {
					icon: 'fa-solid fa-podcast',
					title: 'Texto a audio',
					description: 'Convertir texto a audio',
				},
				loadComponent: () =>
					import(
						'./presentation/pages/text-to-audio-page/text-to-audio-page.component'
					).then((m) => m.TextToAudioPageComponent),
			},
			{
				path: 'audio-to-text',
				data: {
					icon: 'fa-solid fa-comment-dots',
					title: 'Audio a texto',
					description: 'Convertir audio a texto',
				},
				loadComponent: () =>
					import(
						'./presentation/pages/audio-to-text-page/audio-to-text-page.component'
					).then((m) => m.AudioToTextPageComponent),
			},
			{
				path: 'image-generation',
				data: {
					icon: 'fa-solid fa-image',
					title: 'Imágenes',
					description: 'Generar imágenes',
				},
				loadComponent: () =>
					import(
						'./presentation/pages/image-generation-page/image-generation-page.component'
					).then((m) => m.ImageGenerationPageComponent),
			},
			{
				path: 'image-tunning',
				data: {
					icon: 'fa-solid fa-wand-magic',
					title: 'Editar imagen',
					description: 'Generación continua',
				},
				loadComponent: () =>
					import(
						'./presentation/pages/image-tunning-page/image-tunning-page.component'
					).then((m) => m.ImageTunningPageComponent),
			},

			{
				path: 'assistant',
				data: {
					icon: 'fa-solid fa-user',
					title: 'Asistente',
					description: 'Información del asistente',
				},
				loadComponent: () =>
					import(
						'./presentation/pages/assistant-page/assistant-page.component'
					).then((m) => m.AssistantPageComponent),
			},
			{
				path: '**',
				redirectTo: 'orthography',
				pathMatch: 'full',
			},
		],
	},
];
