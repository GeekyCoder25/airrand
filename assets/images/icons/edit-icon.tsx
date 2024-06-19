import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const EditIcon = (props: SvgProps) => (
	<Svg width={15} height={15} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M3.294 4.059H2.53A1.53 1.53 0 0 0 1 5.588v6.882A1.53 1.53 0 0 0 2.53 14h6.882a1.53 1.53 0 0 0 1.53-1.53v-.764"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M13.53 3.742a1.606 1.606 0 0 0-2.272-2.272L4.823 7.882v2.295h2.294zM10.177 2.53l2.294 2.293"
		/>
	</Svg>
);
export default EditIcon;
