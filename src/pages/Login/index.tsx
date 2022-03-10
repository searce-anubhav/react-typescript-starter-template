import * as React from 'react';
import Button from 'components/Button';
import Input from 'components/Input';
import { Link } from 'react-router-dom';

const Login: React.FC = (): JSX.Element => {
	return (
		<React.Fragment>
			<div className='level m-6'>
				<Link to='/'>
					<Button className='button is-warning m-1'>Go to Home</Button>
				</Link>
				<Input
					className='input is-warning m-1'
					type='text'
					placeholder='Enter Name'
				/>
			</div>
		</React.Fragment>
	);
};

export default Login;
