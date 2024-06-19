import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const ErrandsIcon = (props: SvgProps) => (
	<Svg width={23} height={28} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="M13 3.333c0 .354.15.693.415.943.266.25.626.39 1.002.39.375 0 .736-.14 1.001-.39.266-.25.415-.589.415-.943 0-.353-.149-.692-.415-.942A1.46 1.46 0 0 0 14.417 2c-.376 0-.736.14-1.002.39S13 2.98 13 3.334M1.667 20.667 8.75 22l1.063-2M17.25 26v-5.334l-5.667-4 1.417-8"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="M5.917 14v-4L13 8.666l4.25 4L21.5 14"
		/>
	</Svg>
);
export default ErrandsIcon;
