import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const TransportIcon = (props: SvgProps) => (
	<Svg width={27} height={24} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M1 2.294A1.294 1.294 0 0 1 2.294 1h2.588a1.294 1.294 0 0 1 1.294 1.294v5.177a1.294 1.294 0 0 1-1.294 1.294H2.294A1.294 1.294 0 0 1 1 7.47zM17.824 19.118a2.588 2.588 0 1 0 5.176 0 2.588 2.588 0 0 0-5.177 0"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M10.059 3.588h9.059c3.573 0 6.47 4.056 6.47 9.06v6.47H23M17.824 19.118H7.47"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m17.824 3.588 1.94 9.06h5.824M9.412 10.059h9.706M12.647 3.588v6.471M3.588 8.765V23"
		/>
	</Svg>
);
export default TransportIcon;
