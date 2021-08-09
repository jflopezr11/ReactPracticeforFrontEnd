import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';

export class WelcomeBanner extends React.Component {
	render() {
		return (
			<Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)">
				<Container maxW="xl" centerContent>
					<Box padding="4" maxW="3xl">
						<Text fontSize="4xl" textAlign="center">
							Welcome to {this.props.name}'s Coffee Shop
						</Text>
					</Box>
				</Container>
			</Box>
		);
	}
}
