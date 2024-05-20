import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';

const HomeIcon = (props: SvgProps) => (
	<Svg width={18} height={18} fill="none" {...props}>
		<Path
			stroke="#EA1588"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M2.778 9H1l8-8 8 8h-1.778M2.778 9v6.222A1.78 1.78 0 0 0 4.556 17h8.889a1.78 1.78 0 0 0 1.777-1.778V9"
		/>
		<Path
			stroke="#EA1588"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M6.334 17v-5.333A1.78 1.78 0 0 1 8.11 9.889H9.89a1.78 1.78 0 0 1 1.778 1.778V17"
		/>
	</Svg>
);
export default HomeIcon;
