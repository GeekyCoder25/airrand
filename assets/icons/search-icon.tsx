import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SearchIcon = (props: SvgProps) => (
	<Svg width={18} height={18} fill="none" {...props}>
		<Path
			stroke="#EA1588"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M1 7.222a6.222 6.222 0 1 0 12.444 0A6.222 6.222 0 0 0 1 7.222M17 17l-5.334-5.333"
		/>
	</Svg>
);
export default SearchIcon;
