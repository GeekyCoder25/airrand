import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const TutoringIcon = (props: SvgProps) => (
	<Svg width={30} height={23} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M29 7 15 1 1 7l14 6zm0 0v9"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M6.6 9.4v8.1c0 1.193.885 2.338 2.46 3.182S12.772 22 15 22c2.227 0 4.364-.474 5.94-1.318 1.575-.844 2.46-1.989 2.46-3.182V9.4"
		/>
	</Svg>
);
export default TutoringIcon;
