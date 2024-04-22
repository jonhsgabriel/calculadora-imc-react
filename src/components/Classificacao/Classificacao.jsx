import React from 'react';
import styles from './Classificacao.module.css';

const ClassificacaoIMC = ({ classificacao }) => {
    return (
        <div className={styles.classificacao}>
        <p>Classificação: {classificacao}</p>
        </div>
    );
}

export default ClassificacaoIMC;