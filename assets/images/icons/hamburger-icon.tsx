import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const HamburgerIcon = (props: SvgProps) => (
	<Svg width={20} height={16} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M1 1h18M1 8h18M1 15h18"
		/>
	</Svg>
);
export default HamburgerIcon;
