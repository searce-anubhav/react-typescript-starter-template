import React from 'react';
import renderer from 'react-test-renderer';
import Home from 'pages/Home';
import { MemoryRouter } from 'react-router-dom';

test('Render Home Snapshot and Match', () => {
	const component = renderer.create(
		<MemoryRouter>
			<Home></Home>
		</MemoryRouter>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
