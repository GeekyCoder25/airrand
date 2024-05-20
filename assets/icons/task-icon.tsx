import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const TaskIcon = (props: SvgProps) => (
	<Svg width={21} height={20} fill="none" {...props}>
		<Path
			stroke="#EA1588"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M8.413 16.667H6.125c-.464 0-.91-.176-1.237-.489A1.63 1.63 0 0 1 4.375 15V5c0-.442.184-.866.513-1.179a1.8 1.8 0 0 1 1.237-.488h7c.464 0 .91.176 1.237.488.329.313.513.737.513 1.179v6.667M12.25 15.833 14 17.5l3.5-3.333M7.875 6.667h3.5M7.875 10h1.75"
		/>
	</Svg>
);
export default TaskIcon;
