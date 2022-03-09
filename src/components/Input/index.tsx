import * as React from 'react';
import { Input as ChakraInput, InputProps } from '@chakra-ui/react';

const Input: React.FC<InputProps> = ({ placeholder }): JSX.Element => {
	return (
		<React.Fragment>
			<ChakraInput placeholder={placeholder} />
		</React.Fragment>
	);
};

export default Input;
