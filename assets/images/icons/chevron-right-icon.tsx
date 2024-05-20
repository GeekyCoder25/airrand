import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const ChevronRightIcon = (props: SvgProps) => (
	<Svg width={6} height={11} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m1 1 4 4.5L1 10"
		/>
	</Svg>
);
export default ChevronRightIcon;
