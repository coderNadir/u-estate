/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		keyframes: {
			'puff-in-horizontal': {
				'0%': {
					transform: 'scaleX(1.1)',
					filter: 'blur(2px)',
					opacity: 0,
				},
				'100%': {
					transform: 'scaleX(1)',
					filter: 'blur(0)',
					opacity: 1,
				},
			},
			'puff-in-vertical': {
				'0%': {
					transform: 'scaleY(1.1)',
					filter: 'blur(2px)',
					opacity: 0,
				},
				'100%': {
					transform: 'scaleY(1)',
					filter: 'blur(0)',
					opacity: 1,
				},
			},
		},
		extend: {
			colors: {
				main: '#0ca678',
				shade: '#076448',
				tint: '#3db893',
				'main-bg': '#F3F0EB',
				'sec-bg': '#f9fafa',
				'txt-main': '#868e96',
				'txt-sec': '#495057',
			},
			transitionDuration: {
				'8s': '8000ms',
			},
			keyframes: {
				bounce: {
					'from, 20%, 53%, to': {
						'animation-timing-function':
							'cubic-bezier(0.215, 0.61, 0.355, 1)',
						transform: 'translate3d(0, 0, 0) rotate(15deg)',
					},
					'40%, 43%': {
						'animation-timing-function':
							' cubic-bezier(0.755, 0.05, 0.855, 0.06)',
						transform:
							'translate3d(0, -30px, 0) scaleY(1.1) rotate(15deg)',
					},
					'70%': {
						'animation-timing-function':
							'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
						transform:
							'translate3d(0, -15px, 0) scaleY(1.05) rotate(15deg)',
					},
					'80%': {
						'animation-timing-function':
							'cubic-bezier(0.215, 0.61, 0.355, 1)',
						transform:
							'translate3d(0, 0, 0) scaleY(0.95) rotate(15deg)',
					},
					'90%': {
						transform:
							'translate3d(0, -4px, 0) scaleY(1.02) rotate(15deg)',
					},
				},
			},
			animation: {
				brochure: 'bounce 2500ms infinite',
				'puff-in-horizontal': 'puff-in-horizontal 500ms linear',
				'puff-in-vertical': 'puff-in-vertical 500ms linear',
			},
		},
	},
	plugins: [require('tailwind-animatecss')],
};
