import React from 'react';
import styles from './Resultado.module.css';

const Resultado = ({ imc }) => {
    return (
        <div className={styles.resultado}>
        <h2>Seu IMC é: {imc}</h2>
        </div>
    );
}

export default Resultado;