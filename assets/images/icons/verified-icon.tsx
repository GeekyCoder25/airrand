import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const VerifiedIcon = (props: SvgProps) => (
	<Svg width={12} height={12} fill="none" {...props}>
		<Path
			fill="#FFCA0F"
			d="m6 0 1.561 1.195 1.966-.05.56 1.886 1.62 1.115L11.051 6l.654 1.854-1.619 1.115-.56 1.885-1.966-.05L6 12l-1.561-1.195-1.966.05-.56-1.886-1.62-1.115L.949 6 .294 4.146 1.913 3.03l.56-1.885 1.966.05z"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4.8 6 6 7.2l2.4-2.4"
		/>
	</Svg>
);
export default VerifiedIcon;
