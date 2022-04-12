import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
	const onClickButton = () => {
		alert('Aqui hiciste click!');
	};
	return (
		<button
			className="CreateTodoButton"
			onClick={onClickButton}
		>
			+
		</button>
	);
}

export { CreateTodoButton };
