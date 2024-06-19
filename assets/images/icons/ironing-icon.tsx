import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const IroningIcon = (props: SvgProps) => (
	<Svg width={26} height={18} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M10.333 13h.013M9 1h9.945a4 4 0 0 1 3.946 3.343l.769 4.618 1.08 6.487A1.335 1.335 0 0 1 23.427 17H1a9.333 9.333 0 0 1 9.333-9.333H23.4M15.667 13h.012"
		/>
	</Svg>
);
export default IroningIcon;
