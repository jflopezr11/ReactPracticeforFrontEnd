import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { HelloWorld } from './HelloWorld';
import { GetLocation } from './SeasonDisplay';

const App = () => {
	return (
		<ChakraProvider>
			<GetLocation />
		</ChakraProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
