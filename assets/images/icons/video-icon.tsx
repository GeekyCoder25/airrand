import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const VideoIcon = (props: SvgProps) => (
	<Svg width={18} height={14} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeOpacity={0.3}
			strokeWidth={2}
			d="M1 4.429c0-.91.375-1.782 1.041-2.425A3.62 3.62 0 0 1 4.556 1h8.888c.943 0 1.848.361 2.515 1.004A3.37 3.37 0 0 1 17 4.43V9.57c0 .91-.375 1.782-1.041 2.425A3.62 3.62 0 0 1 13.444 13H4.556a3.62 3.62 0 0 1-2.515-1.004A3.37 3.37 0 0 1 1 9.57z"
		/>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeOpacity={0.3}
			strokeWidth={2}
			d="m7.222 4.428 4.445 2.571-4.445 2.572z"
		/>
	</Svg>
);
export default VideoIcon;
