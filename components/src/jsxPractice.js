import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';

/* this file is to help me with JSX using ChakraUI as CSS Framework */

const JsxPractice = () => {
	function clickME() {
		const picturesProperty = {
			pic1: '',
			pic2: '',
			pic3: '',
			pic4: ''
		};

		let newPic;

		console.log(`Hey, you\'ve clicked me! `);
	}

	return (
		<Box width="100%" height={40} bg="papayawhip" onClick={clickME} mt="25">
			<Text fontSize={32} textAlign={[ 'center' ]} lineHeight="10">
				Box with flex made by a Functional Component
			</Text>
		</Box>
	);
};

export default JsxPractice;
