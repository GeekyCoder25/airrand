import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const CookingIcon = (props: SvgProps) => (
	<Svg width={24} height={24} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M12 1.5a4.67 4.67 0 0 1 4.562 3.676A4.667 4.667 0 0 1 19 14.186V22.5H5v-8.314A4.666 4.666 0 0 1 2.525 6.83a4.67 4.67 0 0 1 4.916-1.654A4.67 4.67 0 0 1 12 1.5M5.188 17.843 19 17.833"
		/>
	</Svg>
);
export default CookingIcon;
