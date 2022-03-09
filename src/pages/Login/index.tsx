import * as React from 'react';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

const Login: React.FC = (): JSX.Element => {
	return (
		<React.Fragment>
			<Link to='/'>
				<Button colorScheme='teal'>Go to Home</Button>
			</Link>
		</React.Fragment>
	);
};

export default Login;
