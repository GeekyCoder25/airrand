import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const LogoutIcon = (props: SvgProps) => (
	<Svg width={17} height={16} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M10.056 4.5V2.75c0-.464-.164-.91-.456-1.237A1.47 1.47 0 0 0 8.5 1H3.056c-.413 0-.809.184-1.1.513A1.87 1.87 0 0 0 1.5 2.75v10.5c0 .464.164.91.456 1.237.291.329.687.513 1.1.513H8.5c.413 0 .808-.184 1.1-.513.292-.328.456-.773.456-1.237V11.5M4.611 8h10.89m0 0-2.334-2.625M15.5 8l-2.333 2.625"
		/>
	</Svg>
);
export default LogoutIcon;
