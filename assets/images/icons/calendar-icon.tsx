import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const CalendarIcon = (props: SvgProps) => (
	<Svg
		width={19}
		height={19}
		fill="none"
		{...props}
	>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M1 4.779c0-.501.224-.982.622-1.336a2.27 2.27 0 0 1 1.503-.553h12.75c.564 0 1.104.199 1.503.553S18 4.278 18 4.779v11.333c0 .5-.224.981-.622 1.336a2.27 2.27 0 0 1-1.503.553H3.125a2.27 2.27 0 0 1-1.503-.553A1.79 1.79 0 0 1 1 16.112zM13.75 1v3.778M5.25 1v3.778M1 8.556h17M7.375 13.277h4.25"
		/>
	</Svg>
);
export default CalendarIcon;
