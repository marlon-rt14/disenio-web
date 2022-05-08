import React from "react";
import "./App.css";
import axios from "axios";
// import fetch from 'node-fetch';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

// const url = "https://jsonplaceholder.typicode.com/users/";
const url = "http://localhost:4000/api/local/";

class App extends React.Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEliminar: false,
    form: {
      id: "",
      name: "",
      username: "",
      email: "",
    },
    tipoModal: "",
  };

  // solicitar datos al servidor
  peticionGet = async () => {
    axios
      .get(url, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "X-Requested-With",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((response) => {
        // console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPost = async () => {
    // console.log(this.state.form);
    delete this.state.form.id; // eliminamos el ID ya que es autoincrementable por la base de datos
    await axios
      .post(url, this.state.form)
      .then((response) => {
        this.modalInsertar(); // cerrar el modal
        this.peticionGet(); // volver a solicitar los datos para actulizar la vista
        // console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPut = async () => {
    const aux = url + this.state.form.id;
    console.log(aux);
    await axios
      .put(url + this.state.form.id, this.state.form)
      .then((response) => {
        this.modalInsertar();
        this.peticionGet();
      });
  };

  peticionDelete = async () => {
    await axios
      .delete(url + this.state.form.id)
      .then((response) => {
        this.setState({ modalEliminar: false });
        this.peticionGet();
      })
      .catch((error) => {
        console.log("Error al eliminar " + error.message);
      });
  };

  componentDidMount() {
    this.peticionGet();
  }

  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  };

  selecccionarUsuario = (usuario) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        id: usuario.id,
        name: usuario.name,
        username: usuario.username,
        email: usuario.email,
      },
    });
  };

  handleChange = (e) => {
    // e.persist();
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    // console.log(this.state.form);
  };

  render() {
    const { form } = this.state;
    return (
      <div className="App">
        <br />
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({ form: null, tipoModal: "insertar" });
            this.modalInsertar();
          }}
        >
          Agregar Usuario
        </button>
        <br /> <br />
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.selecccionarUsuario(user);
                        this.modalInsertar();
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    {"   "}
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.selecccionarUsuario(user);
                        this.setState({ modalEliminar: true });
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader style={{ display: "block" }}>
            Editar Registro
            <span style={{ float: "right" }}>x</span>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                className="form-control"
                name="id"
                id="id"
                value={form ? form.id : this.state.data.length + 1}
                readOnly
              />
              <br />
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                value={form ? form.name : ""}
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                value={form ? form.username : ""}
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                value={form ? form.email : ""}
                onChange={this.handleChange}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            {this.state.tipoModal === "insertar" ? (
              <button
                className="btn btn-success"
                onClick={() => this.peticionPost()}
              >
                Insertar
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => this.peticionPut()}
              >
                Actualizar
              </button>
            )}
            <button
              className="btn btn-danger"
              onClick={() => this.modalInsertar()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.modalEliminar}>
          <ModalBody>
            Estas seguro que deseas eliminar al usuario {form && form.nombre}
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-danger"
              onClick={() => this.peticionDelete()}
            >
              Sí
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.setState({ modalEliminar: false })}
            >
              No
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;
