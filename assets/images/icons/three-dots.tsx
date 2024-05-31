import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const ThreeDotsIcon = (props: SvgProps) => (
	<Svg width={5} height={18} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M1 9c0 .265.158.52.44.707.28.188.662.293 1.06.293s.78-.105 1.06-.293C3.843 9.52 4 9.265 4 9s-.158-.52-.44-.707C3.28 8.105 2.899 8 2.5 8s-.78.105-1.06.293C1.157 8.48 1 8.735 1 9M1 16c0 .265.158.52.44.707.28.188.662.293 1.06.293s.78-.105 1.06-.293c.282-.187.44-.442.44-.707s-.158-.52-.44-.707C3.28 15.105 2.899 15 2.5 15s-.78.105-1.06.293c-.282.187-.44.442-.44.707M1 2c0 .265.158.52.44.707.28.188.662.293 1.06.293s.78-.105 1.06-.293C3.843 2.52 4 2.265 4 2s-.158-.52-.44-.707C3.28 1.105 2.899 1 2.5 1s-.78.105-1.06.293C1.157 1.48 1 1.735 1 2"
		/>
	</Svg>
);
export default ThreeDotsIcon;
