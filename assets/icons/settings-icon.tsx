import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SettingsIcon = (props: SvgProps) => (
	<Svg width={18} height={18} fill="none" {...props}>
		<Path
			stroke="#EA1588"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M1 9a8 8 0 1 0 16 0A8 8 0 0 0 1 9"
		/>
		<Path
			stroke="#EA1588"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M6.334 7.222a2.667 2.667 0 1 0 5.333 0 2.667 2.667 0 0 0-5.333 0M3.816 15.088a3.56 3.56 0 0 1 3.406-2.532h3.556a3.56 3.56 0 0 1 3.408 2.537"
		/>
	</Svg>
);
export default SettingsIcon;
