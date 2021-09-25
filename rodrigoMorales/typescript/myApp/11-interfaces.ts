enum role {
  Doctor,
  Anestesista,
  Asistente,
  Administrativo,
}

interface Personal {
	name: string,
	email: string,
	role: role
};

const medico = {
  name: "marlon",
  email: "marlon@gmail.com",
  role: role.Doctor,
};

const mostrarPersonal = (personal: Personal) => {
  console.log(personal);
};

mostrarPersonal(medico);
