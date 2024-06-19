import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const CleaningIcon = (props: SvgProps) => (
	<Svg width={25} height={23} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M2.21 21.58c1.389-4.867 2.4-9.717 2.422-14.527h7.263c.02 4.81 1.032 9.66 2.42 14.526"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M12.5 11.896h5.447c.03 3.161 1.083 6.41 2.421 9.684M8.263 2.211a2.9 2.9 0 0 1 2.421-1.21 2.9 2.9 0 0 1 2.421 1.21 2.9 2.9 0 0 0 2.421 1.21 2.9 2.9 0 0 0 2.421-1.21 2.9 2.9 0 0 1 2.421-1.21 2.9 2.9 0 0 1 2.422 1.21M1 21.58h23"
		/>
	</Svg>
);
export default CleaningIcon;
