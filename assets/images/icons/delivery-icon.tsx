import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const DeliveryIcon = (props: SvgProps) => (
	<Svg width={26} height={20} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M4.79 16.158a2.526 2.526 0 1 0 5.052 0 2.526 2.526 0 0 0-5.052 0M17.421 16.158a2.526 2.526 0 1 0 5.052 0 2.526 2.526 0 0 0-5.052 0"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M4.79 16.158H2.262v-5.053M1 1h13.895v15.158m-5.053 0h7.58m5.052 0H25v-7.58m0 .001H14.895m10.105 0-3.79-6.316h-6.315M2.263 6.053h5.053"
		/>
	</Svg>
);
export default DeliveryIcon;
