// serializado
// objeto = '{"variable1": "PEDRO","variable2": "JORGE"}';

// const deserializado = { "variable1": "PEDRO", "variable2": "JORGE" };
// const serializado = JSON.stringify(deserializado);


const serializado = '{ "variable1": "PEDRO", "variable2": "JORGE" }';
const deserializado = JSON.parse(serializado);



console.log(typeof deserializado);