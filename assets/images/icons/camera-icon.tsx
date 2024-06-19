import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const CameraIcon = (props: SvgProps) => (
	<Svg width={17} height={16} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeOpacity={0.31}
			strokeWidth={2}
			d="M2.667 3.5H3.5a1.667 1.667 0 0 0 1.667-1.667A.833.833 0 0 1 6 1h5a.833.833 0 0 1 .833.833A1.667 1.667 0 0 0 13.5 3.5h.833A1.666 1.666 0 0 1 16 5.167v7.5a1.667 1.667 0 0 1-1.667 1.666H2.667A1.667 1.667 0 0 1 1 12.667v-7.5A1.667 1.667 0 0 1 2.667 3.5"
		/>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeOpacity={0.31}
			strokeWidth={2}
			d="M6 8.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"
		/>
	</Svg>
);
export default CameraIcon;
