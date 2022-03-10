import React from 'react';
import renderer from 'react-test-renderer';
import Button from 'components/Button';

test('Render Button Snapshot and Match', () => {
	const component = renderer.create(<Button>Hello</Button>);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
