import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const ShoppingIcon = (props: SvgProps) => (
	<Svg width={21} height={23} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M1.5 19.375a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0M13.875 19.375a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M16.125 17.125H3.75V1.375H1.5"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M3.75 3.625 19.5 4.75l-1.125 7.875H3.75"
		/>
	</Svg>
);
export default ShoppingIcon;
