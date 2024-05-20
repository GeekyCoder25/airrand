import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const FilterIcon = (props: SvgProps) => (
	<Svg width={16} height={16} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M8 2.75a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0M1 2.75h7M11.5 2.75H15M2.75 8a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0M1 8h1.75M6.25 8H15M10.625 13.25a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0M1 13.25h9.625M14.125 13.25H15"
		/>
	</Svg>
);
export default FilterIcon;
