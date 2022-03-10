import * as React from 'react';

interface InputProps {
	className: string;
	placeholder: string;
	type: string;
}

const Input: React.FC<InputProps> = ({
	className,
	placeholder,
	type,
}): JSX.Element => {
	return (
		<React.Fragment>
			<input className={className} type={type} placeholder={placeholder}></input>
		</React.Fragment>
	);
};

export default Input;
