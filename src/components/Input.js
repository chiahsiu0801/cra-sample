const Input = ({value, id, onChangeHandler, text}) => {
	return (
		<>
			<label htmlFor={id}>{ text }</label>
			<input type="text" id={id} value={value} onChange={onChangeHandler} />
		</>
	);
}

export default Input;
