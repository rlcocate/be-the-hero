import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../services/api';
import './styles.css';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');
    const history = useHistory();

    async function handleRegister(event) {

        //Evita o recarregamento da página que é o comportamento default.
        event.preventDefault();

        const data = { name, email, whatsapp, city, uf };

        try {
            const response = await api.post('ongs', data);
            console.log(response);
            alert(response.data.result);
            history.push('/');
        } catch (error) {
            console.log(error);
            alert('Erro ao criar cadastro');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>

                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" /> Voltar para logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da ONG" value={name}
                        onChange={event => setName(event.target.value)} />
                    <input
                        placeholder="E-mail" value={email}
                        onChange={event => setEmail(event.target.value)} />
                    <input
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)} />
                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            value={city}
                            onChange={event => setCity(event.target.value)} />
                        <input
                            placeholder="UF"
                            value={uf}
                            onChange={event => setUF(event.target.value)}
                            style={{ width: 80 }} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>);
}