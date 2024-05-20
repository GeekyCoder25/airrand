import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const RefreshIcon = (props: SvgProps) => (
	<Svg width={16} height={16} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M15 7.125a7.085 7.085 0 0 0-6.113-6.052 7.09 7.09 0 0 0-7.45 4.303M1 1.876v3.5h3.5M1 8.875a7.085 7.085 0 0 0 6.113 6.052 7.09 7.09 0 0 0 7.45-4.303m.437 3.5v-3.5h-3.5"
		/>
	</Svg>
);
export default RefreshIcon;
