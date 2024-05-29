import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const BackArrow = (props: SvgProps) => (
	<Svg width={17} height={16} fill="none" {...props}>
		<Path
			fill="#000"
			d="M.293 7.293a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L2.414 8l5.657-5.657A1 1 0 0 0 6.657.93zM17 7H1v2h16z"
		/>
	</Svg>
);
export default BackArrow;
