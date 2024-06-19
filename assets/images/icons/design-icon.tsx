import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const DesignIcon = (props: SvgProps) => (
	<Svg width={28} height={28} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m1 14 4.333 4.333L9.667 14 5.333 9.666zM18.333 14l4.334 4.333L27 14l-4.333-4.334zM9.667 5.333 14 9.667l4.333-4.334L14 1zM9.667 22.667 14 27l4.333-4.333L14 18.333z"
		/>
	</Svg>
);
export default DesignIcon;
