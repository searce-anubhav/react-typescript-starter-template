import * as React from 'react';
import Button from 'components/Button';
import Input from 'components/Input';
import { Link } from 'react-router-dom';

const Home: React.FC = (): JSX.Element => {
	return (
		<React.Fragment>
			<div className='level m-6'>
				<Link to='/login'>
					{' '}
					<Button className='button is-success m-1'>Go to Login</Button>
				</Link>
				<Input
					className='input is-primary m-1'
					type='text'
					placeholder='Enter Name'
				/>
			</div>
		</React.Fragment>
	);
};

export default Home;
