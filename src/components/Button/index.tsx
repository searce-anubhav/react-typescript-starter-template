import * as React from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

const Button: React.FC<ButtonProps> = ({
	colorScheme,
	children,
}): JSX.Element => {
	return (
		<React.Fragment>
			<ChakraButton colorScheme={colorScheme}>{children}</ChakraButton>
		</React.Fragment>
	);
};

export default Button;
