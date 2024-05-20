import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const CloseIcon = (props: SvgProps) => (
	<Svg width={15} height={15} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeOpacity={0.5}
			strokeWidth={2}
			d="M14 1 1 14M1 1l13 13"
		/>
	</Svg>
);
export default CloseIcon;
