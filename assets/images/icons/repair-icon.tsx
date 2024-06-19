import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const RepairIcon = (props: SvgProps) => (
	<Svg width={24} height={24} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m10.82 9.084-9.062 9.105a2.566 2.566 0 0 0 0 3.642 2.59 2.59 0 0 0 3.653 0l9.092-9.065"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m19.053 15.58 3.174-3.173a1.227 1.227 0 0 0 0-1.736l-9.311-9.312a1.227 1.227 0 0 0-1.736 0L8.006 4.534a1.227 1.227 0 0 0 0 1.735l9.311 9.312a1.227 1.227 0 0 0 1.736 0"
		/>
	</Svg>
);
export default RepairIcon;
