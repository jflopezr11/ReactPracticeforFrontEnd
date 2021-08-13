import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';

export class NewCol extends React.Component {
	somefunction(a, b, c) {
		a[b] = a[b] || [];
		a[b].push({
			string: 'hello',
			model: 1991
		});
	}
	render() {
		return (
			<Menu>
				<MenuButton as={Button}>Menu</MenuButton>
				<MenuList>
					<MenuItem>Home</MenuItem>
					<MenuItem>About Me</MenuItem>
					<MenuItem>Projects</MenuItem>
					<MenuItem>Contact Me</MenuItem>
				</MenuList>
			</Menu>
		);
	}
}
