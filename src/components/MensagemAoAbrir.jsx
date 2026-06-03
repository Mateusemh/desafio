import React, {useEffect} from 'react'

const MensagemAoAbrir = () => {

    useEffect(() => {
        console.log("Componente carregou!")
        alert("Bem-vindo(a) ao meu primeiro useEffect!")

    },[])

    return (
        <div>
            <h1>Página carregada com sucesso!</h1>
        </div>
    )
}

export default MensagemAoAbrir