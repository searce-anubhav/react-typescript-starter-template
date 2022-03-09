import * as React from 'react';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

const Home: React.FC = (): JSX.Element => {
	return (
		<React.Fragment>
			<Link to='/login'>
				<Button colorScheme='teal'>Go to Login</Button>
			</Link>
		</React.Fragment>
	);
};

export default Home;
