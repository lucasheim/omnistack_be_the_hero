import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";


export default function NewIncident() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const history = useHistory();

    const ongId = localStorage.getItem("ongId");

    function handleNewIncident(event) {
        event.preventDefault();

        api.post("incidents", {
            title,
            description,
            value
        }, {
            headers: {
                Authorization: ongId
            }
        })
        .then(() => {
            history.push("/profile");
        })
        .catch(() => {
            alert("Erro ao criar caso");
        });
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do caso"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}