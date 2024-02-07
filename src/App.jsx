import { v4 as uuidv4 } from "uuid";
import ContactCard from "./components/ContactCard";

import "./App.css";

const contatos = [
	{
		id: 1,
		nome: "Ana Silva",
		email: "ana.silva@example.com",
		favorito: true,
	},
	{
		id: 2,
		nome: "Pedro Rocha",
		email: "pedro.rocha@example.com",
		favorito: false,
	},
	{
		id: 3,
		nome: "Gustavo Henrique",
		email: "gustavo.henrique@example.com",
		favorito: true,
	},
	{
		id: 4,
		nome: "Mariana Costa",
		email: "mariana.costa@example.com",
		favorito: false,
	},
	{
		id: 4,
		nome: "Mariana Costa",
		email: "mariana.costa@example.com",
		favorito: false,
	},
];

const App = () => {
	// Universo da logica

	// Universo de view/Interface
	return (
		<>
			<h1>Minha lista de contactos</h1>
			<div className="contact-list">
				{contatos.map((contacto) => {
					return (
						// <ContactCard
						// 	key={uuidv4()}
						// 	nome={contacto.nome}
						// 	email={contacto.email}
						// 	favorito={contacto.favorito}
						// />

						<ContactCard key={uuidv4()} {...contacto} />
					);
				})}
			</div>
		</>
	);
};

const AppFiltrar = () => {
	// Universo da logica
	const contactosFavoritos = contatos.filter((contacto) => contacto.favorito);

	// Universo de view/Interface
	return (
		<>
			<h1>Minha lista de contactos</h1>
			<div className="contact-list">
				{contactosFavoritos.map((contacto) => (
					<ContactCard key={uuidv4()} {...contacto} />
				))}
			</div>
		</>
	);
};

const AppTudoJunto = () => {
	return (
		<>
			<App />
			<AppFiltrar />
		</>
	);
};

export default AppTudoJunto;
