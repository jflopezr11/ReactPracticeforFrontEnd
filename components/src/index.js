import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';
import FunctionComp from './FunctionalComponent.js';
import ClassComp from './ClassComponent.js';
import { ChakraProvider } from '@chakra-ui/react';

/* Okay, this is me Practicing Components and Props. By the end of this  I should know:
    -Functional Components
    -Class based Componets
    -When to use Functional Components vs Class Components 
    -Props
    -State
*/

const ShowComponents = () => {
	return (
		<ChakraProvider>
			<ClassComp />
			<FunctionComp />
		</ChakraProvider>
	);
};

ReactDOM.render(<ShowComponents />, document.getElementById('root'));
