import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SwitchOnIcon = (props: SvgProps) => (
	<Svg width={28} height={16} fill="none" {...props}>
		<Rect width={28} height={15.429} fill="#EA1588" rx={7.714} />
		<Rect width={12.571} height={12} x={2.714} y={1.714} fill="#fff" rx={6} />
	</Svg>
);
export default SwitchOnIcon;
