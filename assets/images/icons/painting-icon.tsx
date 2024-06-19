import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const PaintingIcon = (props: SvgProps) => (
	<Svg width={26} height={26} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M13 25.003A12 12 0 0 1 1 13 12 12 0 0 1 13 1c6.627 0 12 4.777 12 10.668 0 1.413-.632 2.77-1.757 3.771S20.59 17.002 19 17.002h-3.333a2.666 2.666 0 0 0-1.334 5 1.733 1.733 0 0 1-1.333 3"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M7 11.001a1.334 1.334 0 1 0 2.667 0A1.334 1.334 0 0 0 7 11M12.333 7.001a1.333 1.333 0 1 0 2.667 0 1.333 1.333 0 0 0-2.667 0M17.666 11.001a1.333 1.333 0 1 0 2.667 0 1.333 1.333 0 0 0-2.667 0"
		/>
	</Svg>
);
export default PaintingIcon;
