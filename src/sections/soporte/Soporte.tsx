import React from 'react';
import Chatbot from './Chatbot';

const Soporte: React.FC = () => {
  return (
    <div className="soporte-section">
      <h2>Soporte al Cliente</h2>
      <p>Chatea con nuestro asistente para consultas sobre productos, pagos o sucursales.</p>
      <Chatbot />
    </div>
  );
};

export default Soporte;

