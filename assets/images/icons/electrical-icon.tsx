import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const ElectricalIcon = (props: SvgProps) => (
	<Svg width={29} height={24} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M1 13.15h12.15M18.55 13.15H28M13.15 3.7v18.9M18.55 9.1v8.1M2.35 3.7h5.4M5.05 1v5.4"
		/>
	</Svg>
);
export default ElectricalIcon;
