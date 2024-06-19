import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const TranslationIcon = (props: SvgProps) => (
	<Svg width={22} height={22} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M1 21V4.75A3.75 3.75 0 0 1 4.75 1h12.5A3.75 3.75 0 0 1 21 4.75v7.5A3.75 3.75 0 0 1 17.25 16H6z"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M8.5 12.25v-5a2.5 2.5 0 1 1 5 0v5M13.5 9.75h-5"
		/>
	</Svg>
);
export default TranslationIcon;
