import React, { useState } from "react";
import { Modal, TextField, Button } from "@mui/material";
import "./Modal.css";

const ModalObra = ({ obra, open, onClose, comentarios, setComentarios }) => {
  const [nuevoComentario, setNuevoComentario] = useState("");

  const handleAgregarComentario = () => {
    if (nuevoComentario.trim() === "") return;

    setComentarios((prevComentarios) => ({
      ...prevComentarios,
      [obra.id]: [
        ...(prevComentarios[obra.id] || []),
        nuevoComentario,
      ],
    }));

    setNuevoComentario("");
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="modal-content">
        {obra && (
          <>
            <h2>{obra.nombre}</h2>
            <p>{obra.descripcion}</p>
            <div className="comentarios">
              <h3>Comentarios:</h3>
              <ul>
                {(comentarios[obra.id] || []).map((comentario, index) => (
                  <li key={index}>{comentario}</li>
                ))}
              </ul>
            </div>
            <div className="nuevo-comentario">
              <TextField
                fullWidth
                label="Escribe un comentario"
                variant="outlined"
                value={nuevoComentario}
                onChange={(e) => setNuevoComentario(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAgregarComentario}
                style={{ marginTop: "10px" }}
              >
                Agregar Comentario
              </Button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default ModalObra;
