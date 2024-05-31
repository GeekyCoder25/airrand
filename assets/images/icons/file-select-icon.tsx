import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const FileSelectIcon = (props: SvgProps) => (
	<Svg width={20} height={21} fill="none" {...props}>
		<Path
			stroke="#EA1588"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m12.364 5.243-6.5 6.5a2.121 2.121 0 0 0 3 3l6.5-6.5a4.243 4.243 0 0 0-6-6l-6.5 6.5a6.364 6.364 0 1 0 9 9l6.5-6.5"
		/>
	</Svg>
);
export default FileSelectIcon;
