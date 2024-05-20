import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const ReadIcon = (props: SvgProps) => (
	<Svg width={15} height={8} fill="none" {...props}>
		<Path
			stroke="#EA1588"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4.25 4.25 7.5 7.5 14 1M1 4.25 4.25 7.5M7.5 4.25 10.75 1"
		/>
	</Svg>
);
export default ReadIcon;
