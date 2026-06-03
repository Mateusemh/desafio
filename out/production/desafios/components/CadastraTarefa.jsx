import axios from 'axios'
import React, {useState} from 'react'


const CadastraTarefa = () => {

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')

    function handleSubmit (e)  {
        e.preventDefault()

        const novaTarefa = { titulo, descricao };

        axios.post('http://localhost:3001/tarefas', novaTarefa)
            .then((resposta) => {
                alert('Tarefa cadastrada com sucesso!');
                console.log('Tarefa criada:', resposta.data);
                setTitulo('');
                setDescricao('');
            })
            .catch((erro) => {
                alert('Deu ruim ao cadastrar :(');
                console.error(erro);
            });
    }



    return (
        <div>
            <h1>Cadastrar Tarefa</h1>
            <form onSubmit={handleSubmit} >
                <label>Titulo
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)} />
                </label>
                <label>
                    Descricao:
                    <input
                        type="text"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </label>
                <button type="submit">Cadastrar</button>
            </form>

        </div>
    )
}

export default CadastraTarefa