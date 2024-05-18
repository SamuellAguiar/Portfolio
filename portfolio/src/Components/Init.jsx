import * as React from 'react';

const Init = () => {
    return (
        <div style={{
            height: '90vh',
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-around',
            paddingTop: '50px',
        }}>
            <div style={{
                display: 'flex',
                padding: '20px',
                paddingTop: '130px',
                fontSize: '20px',
                flexDirection: 'column',
                color: '#f2f2f2',
            }}>
                <h2 style={{maxWidth: '600px'}}>Olá!</h2>
                <p style={{ paddingTop:'20px', maxWidth: '230px'}}>Me chamo Samuell Aguiar, sou estudante de Sistemas de Informação na <a href="https://ufop.br/" style={{textDecoration:'none', color:'#f2f2f2'}}>Ufop</a> e sou desenvolvedor Full-Stack.</p>
            </div>

            <div style={{
                display: 'flex',
                padding: '20px',
                paddingTop: '50px',
            }}>
                <img src="../src/assets/Eu.jpg" alt="" style={{
                    borderRadius: '230%',
                    width: '350px',
                    height: '350px',
                }} />
            </div>
        </div>
    )
}

export default Init;
