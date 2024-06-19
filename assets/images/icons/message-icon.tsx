import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const MessageIcon = (props: SvgProps) => (
	<Svg width={17} height={16} fill="none" {...props}>
		<Path
			stroke={props.color || '#EA1588'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m8.5 15-2.812-2.8H3.813a2.82 2.82 0 0 1-1.99-.82A2.8 2.8 0 0 1 1 9.4V3.8c0-.743.296-1.455.824-1.98A2.82 2.82 0 0 1 3.813 1h9.375c.745 0 1.46.295 1.988.82S16 3.057 16 3.8v5.6c0 .743-.296 1.455-.824 1.98a2.82 2.82 0 0 1-1.989.82h-1.874zM4.75 4.733h7.5M4.75 8.467h5.625"
		/>
	</Svg>
);
export default MessageIcon;
