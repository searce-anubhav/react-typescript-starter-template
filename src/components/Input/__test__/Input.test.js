import React from 'react';
import renderer from 'react-test-renderer';
import Input from 'components/Input';

test('Render Input Snapshot and Match', () => {
	const component = renderer.create(<Input />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
