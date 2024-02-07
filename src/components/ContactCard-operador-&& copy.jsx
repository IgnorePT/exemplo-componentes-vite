const ContactCard = (props) => {
	const { nome, email, favorito } = props;

	// Metodo removerFavorito
	const removerFavoritos = () => console.log("Remover dos favoritos");

	return (
		<div className="contact-card">
			<h3>{nome}</h3>
			<a href={`mailto:${email}`}>{email}</a>

			{/* Operador && - só renderiza caso a condiçao a esquerda seja verdadeira */}
			{favorito && (
				<span onClick={removerFavoritos} className="badge">
					❤️
				</span>
			)}

			{/* Operador && - só renderiza caso a negação de favorito seja true */}
			{!favorito && (
				<span onClick={removerFavoritos} className="badge">
					💔
				</span>
			)}
		</div>
	);
};

export default ContactCard;
