const ContactCard = (props) => {
	const { nome, email, favorito } = props;

	return (
		<div className="contact-card">
			<h3>{nome}</h3>
			<a href={`mailto:${email}`}>{email}</a>

			{/* Operador Ternario nos estilos */}
			{/* HTML presente na pagina mas visualmente escondigo  */}
			<span
				style={{
					display: favorito ? "block" : "none",
				}}
				className="badge"
			>
				❤️
			</span>

			{/* Operador Ternario com componente */}
			{/* Só um dos elementos será renderizado na página  */}
			{favorito ? (
				<span className="badge">❤️</span>
			) : (
				<span className="badge">💔</span>
			)}

			{/* Operador Ternario com componente com null */}
			{/* Só no caso truen é que existira um elemento renderizado na página  */}
			{favorito ? <span className="badge">❤️</span> : null}
		</div>
	);
};

export default ContactCard;
