import generator from 'generate-password';

const PasswordGenerators = () => {
	const  password = generator.generate({
		length: 10,
		numbers: true,
	});

	const yourPassword = `your password is : ${password}`; 
		return (
		<>
			<div>
				<h2>{yourPassword}</h2>
			</div>
		</>
	);
}

export default PasswordGenerators;