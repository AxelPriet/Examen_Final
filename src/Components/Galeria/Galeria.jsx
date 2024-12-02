import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModalObra from "../Modal/Modal";
import { Text } from "@react-three/drei";  // Importa el componente Text de drei
import "./Galeria.css";

const obras = [
  {
    id: 1,
    nombre: "Obra 1",
    descripcion: "Descripción de la Obra 1",
    color: "yellow",
  },
  {
    id: 2,
    nombre: "Obra 2",
    descripcion: "Descripción de la Obra 2",
    color: "blue",
  },
  {
    id: 3,
    nombre: "Obra 3",
    descripcion: "Descripción de la Obra 3",
    color: "red",
  },
];

const Obra = ({ nombre, color, position, onClick }) => (
  <group position={position}>
    <mesh onClick={onClick}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>

    {/* Agrega el texto como un "tag" sobre la obra */}
    <Text
      position={[0, 1.2, 0]}   // Ajusta la posición del texto sobre la obra
      fontSize={0.2}             // Tamaño del texto
      color="white"             // Color del texto
      anchorX="center"          // Centra el texto
      anchorY="middle"
    >
      {nombre}
    </Text>
  </group>
);

const Galeria = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [obraSeleccionada, setObraSeleccionada] = useState(null);
  const [comentarios, setComentarios] = useState({});

  useEffect(() => {
    const comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || {};
    setComentarios(comentariosGuardados);
  }, []);

  useEffect(() => {
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
  }, [comentarios]);

  const handleOpenModal = (obra) => {
    setObraSeleccionada(obra);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setObraSeleccionada(null);
  };

  return (
    <div className="galeria-container">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}> {/* Ajusta la cámara para ver las obras claramente */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />

        {obras.map((obra, index) => (
          <Obra
            key={obra.id}
            nombre={obra.nombre}  // Pasa el nombre de la obra
            color={obra.color}
            position={[index * 3 - 3, 0, 0]}  // Ajusta la posición de las obras para centrarlas
            onClick={() => handleOpenModal(obra)}
          />
        ))}
      </Canvas>

      <ModalObra
        obra={obraSeleccionada}
        open={modalOpen}
        onClose={handleCloseModal}
        comentarios={comentarios}
        setComentarios={setComentarios}
      />
    </div>
  );
};

export default Galeria;


