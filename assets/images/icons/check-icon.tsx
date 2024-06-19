import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const CheckIcon = (props: SvgProps) => (
	<Svg width={32} height={32} fill="none" {...props}>
		<Path
			stroke="#12D153"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M1 16a15 15 0 1 0 30 0 15 15 0 0 0-30 0"
		/>
		<Path
			stroke="#12D153"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m11 16 3.333 3.334L21 12.667"
		/>
	</Svg>
);
export default CheckIcon;
