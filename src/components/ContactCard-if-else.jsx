const ContactCard = (props) => {
	const { nome, email, favorito } = props;

	// Criamos uma variavel para armazenarmos o elemento JSX icon
	// Caso favorito seja true criamos badge com o icon com ❤️
	// Caso favorito seja false criamos badge com o icon 💔
	let icon;
	if (favorito) {
		icon = <span className="badge">❤️</span>;
	} else {
		icon = <span className="badge">💔</span>;
	}

	return (
		<div className="contact-card">
			<h3>{nome}</h3>
			<a href={`mailto:${email}`}>{email}</a>

			{/* Utilizamos a variavel que armazena o elemento (neste caso icon) */}
			{icon}
		</div>
	);
};

export default ContactCard;
