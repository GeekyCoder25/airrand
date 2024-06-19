import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const HomeIconClient = (props: SvgProps) => (
	<Svg width={25} height={25} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M3.556 12.5H1L12.5 1 24 12.5h-2.556M3.555 12.5v8.944A2.556 2.556 0 0 0 6.111 24h12.778a2.555 2.555 0 0 0 2.555-2.556V12.5"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M9.945 12.5h5.11v5.111h-5.11z"
		/>
	</Svg>
);
export default HomeIconClient;
