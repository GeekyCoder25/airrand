import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const PetIcon = (props: SvgProps) => (
	<Svg width={26} height={21} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m10.335 12.998 7.447-7.446a2.667 2.667 0 1 1 4.551-1.886 2.666 2.666 0 1 1-1.883 4.551l-4.783 4.781"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m13 10.332-4.78-4.78a2.666 2.666 0 1 0-4.552-1.886 2.666 2.666 0 1 0 1.884 4.551l4.782 4.781M1.002 19.664H25c-.234-2.228-.062-4.46-2.667-6.666H3.668q-2.666 2-2.666 6.666"
		/>
	</Svg>
);
export default PetIcon;
