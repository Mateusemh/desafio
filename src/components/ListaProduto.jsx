import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ListaProdutos = () => {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/produtos')
            .then((response) => {
                setProdutos(response.data)
            })
            .catch((error) => {
                console.error("erro ao buscar produtos", error)
            })

    }, [])


    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id}>{produto.nome} - R$ {produto.preco}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListaProdutos