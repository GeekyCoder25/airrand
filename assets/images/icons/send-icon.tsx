import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SendIcon = (props: SvgProps) => (
	<Svg width={21} height={21} fill="none" {...props}>
		<Path
			stroke="#EA1588"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m8.32 12 11-11M19.32 1l-6.5 18a.55.55 0 0 1-1 0l-3.5-7-7-3.5a.55.55 0 0 1 0-1z"
		/>
	</Svg>
);
export default SendIcon;
