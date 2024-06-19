import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const PhotographyIcon = (props: SvgProps) => (
	<Svg width={26} height={24} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M3.667 5H5a2.667 2.667 0 0 0 2.667-2.667A1.333 1.333 0 0 1 9 1h8a1.333 1.333 0 0 1 1.333 1.333A2.667 2.667 0 0 0 21 5h1.333A2.667 2.667 0 0 1 25 7.667v12a2.667 2.667 0 0 1-2.667 2.666H3.667A2.667 2.667 0 0 1 1 19.667v-12A2.667 2.667 0 0 1 3.667 5"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M9.667 15.667a4.666 4.666 0 0 0 6.666 0M17 10.334h.013M9 10.334h.013"
		/>
	</Svg>
);
export default PhotographyIcon;
