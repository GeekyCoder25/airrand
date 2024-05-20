import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const NotificationIcon = (props: SvgProps) => (
	<Svg width={14} height={16} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeOpacity={0.7}
			strokeWidth={2}
			d="M5.5 2.556c0-.413.158-.809.44-1.1A1.47 1.47 0 0 1 7 1c.398 0 .78.164 1.06.456.282.291.44.687.44 1.1a5.3 5.3 0 0 1 2.124 1.901c.528.823.831 1.778.876 2.765v2.334c.056.483.222.946.482 1.351.26.406.61.742 1.018.982H1c.409-.24.757-.576 1.018-.982.26-.405.426-.868.482-1.351V7.222a5.6 5.6 0 0 1 .876-2.765A5.3 5.3 0 0 1 5.5 2.556M4.75 11.889v.778c0 .619.237 1.212.659 1.65A2.2 2.2 0 0 0 7 15a2.2 2.2 0 0 0 1.591-.683 2.38 2.38 0 0 0 .659-1.65v-.778"
		/>
	</Svg>
);
export default NotificationIcon;
