import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

export class GetLocation extends React.Component {
	render() {
		window.navigator.geolocation.getCurrentPosition((position) => console.log(position), (err) => console.log(err));
		return (
			<Box>
				<Heading>Here</Heading>
			</Box>
		);
	}
}
