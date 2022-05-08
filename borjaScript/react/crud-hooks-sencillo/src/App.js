// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function App() {
  const dataPaises = [
    { id: 1, pais: "Filipinas", minutos: 241 },
    { id: 2, pais: "Brasil", minutos: 225 },
    { id: 3, pais: "Colombia", minutos: 216 },
    { id: 4, pais: "Nigeria", minutos: 216 },
    { id: 5, pais: "Argentina", minutos: 207 },
    { id: 6, pais: "Indonesia", minutos: 195 },
    { id: 7, pais: "Emiratos Arabes Unidos", minutos: 191 },
    { id: 8, pais: "Mexico", minutos: 190 },
    { id: 9, pais: "Sudafrica", minutos: 190 },
    { id: 10, pais: "Egipto", minutos: 186 },
  ];

  const [data, setData] = useState(dataPaises);
  const [modal, setModal] = useState(false);
  const [nuevo, setNuevo] = useState(false);
  const [eliminar, setEliminar] = useState(false);
  const [paisSeleccionado, setPaisSeleccionado] = useState({
    id: "",
    pais: "",
    minutos: "",
  });

  const handleChange = (e) => {
    setPaisSeleccionado({
      ...paisSeleccionado,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (nuevo) {
      let lista = data;
      paisSeleccionado.id = lista.length + 1;
      // setData({ ...data, paisSeleccionado });
      lista.push(paisSeleccionado);
      setData(lista);
    } else {
      for (const item of data) {
        if (item.id === paisSeleccionado.id) {
          item.pais = paisSeleccionado.pais;
          item.minutos = paisSeleccionado.minutos;
        }
      }
    }
  };

  const handleDelete = () => {
    const lista = data;
    let contador = 0;
    lista.map((elemento) => {
      if (elemento.id === paisSeleccionado.id) {
        lista.splice(contador, 1);
      }
      contador++;
      return elemento;
    });
    setData(lista);
    setEliminar(false);
  };

  return (
    <div className="App">
      <h2>
        Paises en los que la gente pasa mas tiempo en las redes sociales (2021)
      </h2>
      <br />
      <button
        className="btn btn-success"
        onClick={() => {
          setPaisSeleccionado({ id: "", pais: "", minutos: "" });
          setModal(true);
          setNuevo(true);
        }}
      >
        Agregar Pais
      </button>
      <br />
      <br />
      <table className="table table-borderless  table-striped">
        <thead className="table table-success">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Minutos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.pais}</td>
                <td>{item.minutos}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setPaisSeleccionado(item);
                      setModal(true);
                      setNuevo(false);
                    }}
                  >
                    Editar
                  </button>
                  {"   "}
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setPaisSeleccionado(item);
                      setEliminar(true);
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal isOpen={modal}>
        <ModalHeader>
          {!nuevo ? (
            <div>
              <h3>Editar Pais</h3>
            </div>
          ) : (
            <div>
              <h3>Nuevo Pais</h3>
            </div>
          )}
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              name="id"
              className="form-control"
              readOnly
              value={!nuevo ? paisSeleccionado.id : data.length + 1}
            />
            <br />
            <label htmlFor="pais">Pais:</label>
            <input
              type="text"
              name="pais"
              className="form-control"
              onChange={(e) => handleChange(e)}
              value={paisSeleccionado ? paisSeleccionado.pais : ""}
            />
            <br />
            <label htmlFor="minutos">minutos:</label>
            <input
              type="text"
              name="minutos"
              className="form-control"
              onChange={(e) => handleChange(e)}
              value={paisSeleccionado ? paisSeleccionado.minutos : ""}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          {!nuevo ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                setModal(false);
                handleSave();
              }}
            >
              Actualizar
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => {
                setModal(false);
                handleSave();
              }}
            >
              Guardar
            </button>
          )}
          <button
            className="btn btn-danger"
            onClick={() => {
              setModal(false);
              setNuevo(false);
            }}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={eliminar}>
        <ModalBody>
          ¿Esta seguro que desea eliminar este Pais?
          <ModalFooter>
            <button
              className="btn btn-primary"
              onClick={() => {
                handleDelete();
              }}
            >
              Eliminar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setEliminar(false)}
            >
              Cancelar
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default App;
