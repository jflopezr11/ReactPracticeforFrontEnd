import React from 'react';
import { Box, Badge, Image, Grid, GridItem, Text } from '@chakra-ui/react';

const FunctionComp = () => {
	const coffeeProperty = {
		imageURL:
			'https://www.abc4.com/wp-content/uploads/sites/4/2021/04/GettyImages-1191285127.jpg?w=1752&h=986&crop=1',
		imageALT: 'Hot Cup of Coffee',
		sizeOfCups: '8oz',
		brewMethod: 'Drip',
		rating: '4/5'
	};

	return (
		<Grid h="500px" templateColumns="repeat(1, 1fr)" gap={12}>
			<Box>
				<Text bgGradient="linear(to-l, #22c1c3, #fdbb2d)" bgClip="text" fontSize="6xl">
					I am a Functional Component
				</Text>
			</Box>
			<Box maxW="sm" borderWidth="1px" borderRadius="12px" overflow="hidden" boxShadow="xl">
				<Image src={coffeeProperty.imageURL} alt={coffeeProperty.imageALT} />
				<Box p="6">
					<Box d="flex" alignItems="baseline">
						<Badge borderRadius="full" px="2" colorScheme="blue">
							{coffeeProperty.imageALT}
						</Badge>
					</Box>
					<Grid>
						<GridItem colSpan={10} h="10" mt="5">
							<Badge borderRadius="full" px="2" bg="papayawhip">
								Size: {coffeeProperty.sizeOfCups}
							</Badge>
						</GridItem>
						<GridItem colSpan={10} h="10">
							<Badge borderRadius="full" px="2" bg="papayawhip">
								Brew Method: {coffeeProperty.brewMethod}
							</Badge>
						</GridItem>
					</Grid>
				</Box>
			</Box>
		</Grid>
	);
};

export default FunctionComp;
