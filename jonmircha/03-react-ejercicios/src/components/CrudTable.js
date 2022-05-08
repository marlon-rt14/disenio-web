import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Tabla de datos</h3>
      <table
        className="table"
        style={{ color: "var(--table-color)" }}
      >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th style={{ textAlign: "center" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {!data.length > 0 ? (
            <tr>
              <td colSpan="4">Sin datos</td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudTableRow
                el={el}
                key={el.id}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
