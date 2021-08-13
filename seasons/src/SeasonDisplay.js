import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import SeaDisplay from './HelloWorld';

export class GetLocation extends React.Component {
	state = { latitude: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			//to update my state object. I called setState!
			(position) => this.setState({ latitude: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	render() {
		if (this.state.errorMessage && !this.state.latitude) {
			return (
				<Box>
					<Heading>Error: {this.state.errorMessage}</Heading>
				</Box>
			);
		}
		if (!this.state.errorMessage && this.state.latitude) {
			return (
				<Box>
					<SeaDisplay lat={this.state.latitude} />
				</Box>
			);
		}
		return <Heading>Loading! </Heading>;
	}
}
