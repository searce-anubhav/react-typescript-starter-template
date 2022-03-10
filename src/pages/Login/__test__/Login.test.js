import React from 'react';
import renderer from 'react-test-renderer';
import Login from 'pages/Login';
import { MemoryRouter } from 'react-router-dom';

test('Render Login Snapshot and Match', () => {
	const component = renderer.create(
		<MemoryRouter>
			<Login></Login>
		</MemoryRouter>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
