import { css } from '@emotion/react'

const getStyle = (hasError) => css`
	@keyframes shake {
		0% {
			transform: translate(1px, 0px) rotate(0deg);
		}
		10% {
			transform: translate(-1px, 0px) rotate(0deg);
		}
		20% {
			transform: translate(-1px, 0px) rotate(0deg);
		}
		30% {
			transform: translate(1px, 0px) rotate(0deg);
		}
		40% {
			transform: translate(1px, 0px) rotate(0deg);
		}
		50% {
			transform: translate(-1px, 0px) rotate(0deg);
		}
		60% {
			transform: translate(-1px, 0px) rotate(0deg);
		}
		70% {
			transform: translate(1px, 0px) rotate(0deg);
		}
		80% {
			transform: translate(-1px, 0px) rotate(0deg);
		}
		90% {
			transform: translate(1px, 0px) rotate(0deg);
		}
		100% {
			transform: translate(1px, 0px) rotate(0deg);
		}
	}
	animation: ${hasError ? 'shake' : ''} 0.5s;
	animation-iteration-count: 2;
`

export default getStyle
