import React from 'react';
import { Box, Text } from '@chakra-ui/react';

class ClassComp extends React.Component {
	render() {
		return (
			<Box textAlign="center" border="2px" borderRadius="12px">
				<Text bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text" fontSize="6xl" fontWeight="extrabold">
					Hello I am a Class Component
				</Text>
			</Box>
		);
	}
}

export default ClassComp;
