import * as React from 'react';

interface ButtonProps {
	className: string;
}

const Button: React.FC<ButtonProps> = ({
	className,
	children,
}): JSX.Element => {
	return (
		<React.Fragment>
			<button className={className}>{children}</button>
		</React.Fragment>
	);
};

export default Button;
