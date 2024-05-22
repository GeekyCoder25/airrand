import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const GiveawayIcon = (props: SvgProps) => (
	<Svg width={14} height={14} fill="none" {...props}>
		<Path
			stroke="#FFA902"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M1 5a.667.667 0 0 1 .667-.666h10.667A.667.667 0 0 1 13 5v1.334a.667.667 0 0 1-.666.666H1.667A.667.667 0 0 1 1 6.334zM7 4.334V13"
		/>
		<Path
			stroke="#FFA902"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M11.667 7v4.667a1.333 1.333 0 0 1-1.333 1.334H3.667a1.334 1.334 0 0 1-1.333-1.334V7M4 4.334A1.667 1.667 0 1 1 4 1c.643-.01 1.274.301 1.809.896.535.594.95 1.444 1.191 2.438.241-.994.657-1.844 1.192-2.438S9.357.989 10 1a1.667 1.667 0 0 1 0 3.334"
		/>
	</Svg>
);
export default GiveawayIcon;
