import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const FileUploadIcon = (props: SvgProps) => (
	<Svg width={15} height={18} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeOpacity={0.3}
			strokeWidth={2}
			d="M9.357 1v3.556a.87.87 0 0 0 .272.628.95.95 0 0 0 .657.26H14"
		/>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeOpacity={0.3}
			strokeWidth={2}
			d="M12.143 17H2.857a1.9 1.9 0 0 1-1.313-.52A1.74 1.74 0 0 1 1 15.221V2.778c0-.472.196-.924.544-1.257A1.9 1.9 0 0 1 2.857 1h6.5L14 5.444v9.778c0 .472-.196.924-.544 1.257a1.9 1.9 0 0 1-1.313.521M7.5 8.111v5.334"
		/>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeOpacity={0.3}
			strokeWidth={2}
			d="M5.178 10.334 7.5 8.11l2.321 2.223"
		/>
	</Svg>
);
export default FileUploadIcon;
