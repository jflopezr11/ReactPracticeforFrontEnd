import React from 'react';
import ReactDOM from 'react-dom';
import FunctionComp from './FunctionalComponent.js';
import ClassComp from './ClassComponent.js';
import { ChakraProvider } from '@chakra-ui/react';
import JsxPractice from './jsxPractice';
import PropsPracticeOne from './Props1.js';
import { NewCol } from './Menu.js';

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
			<NewCol />
			<ClassComp />
			<FunctionComp />
			<JsxPractice />
			<PropsPracticeOne />
		</ChakraProvider>
	);
};

ReactDOM.render(<ShowComponents />, document.getElementById('root'));
