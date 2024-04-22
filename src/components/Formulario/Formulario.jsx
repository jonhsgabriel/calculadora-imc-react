import React, { useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = ({ calcularIMC }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    return (
        <div className={styles.form}>
        <label>Altura (cm): </label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
        <label>Peso (kg): </label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        <button onClick={() => calcularIMC(altura, peso)}>Calcular</button>
        </div>
    );
}

export default Formulario;