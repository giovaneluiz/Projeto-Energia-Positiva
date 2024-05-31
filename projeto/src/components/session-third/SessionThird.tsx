import { useState } from "react"
import { toast } from "react-toastify";
import "./style.css"
export const SessionThird = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [desc, setDesc] = useState('')

  const handleInvite = () => {
    if (name !== '' && email !== '' && desc !== '') {
      toast.success("Solicitação enviada com sucesso, aguarde o contato de um representante!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setDesc('')
      setEmail('')
      setName('')
    } else {
      toast.error("Ops! Algo deu errado, confira se todos os campos estão preenchidos.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }
  return (
    <section className="container-sessionThird" id="contact">
      <h3>Faça contato agora mesmo com nossa equipe</h3>
      <p>Informações sobre aquisição do beneficio e valores para empresas em um unico canal de atendimento. Mais praticidade e velocidade no atendimento!</p>
      <div className="container-form">
        <form action="">
          <div className="input-group">
            <label> Nome: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="input-group">
            <label> Email: </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label> Mensagem: </label>
            <textarea className="textarea" value={desc} onChange={(e) => setDesc(e.target.value)} required />
          </div>
          <div className="btn-form">
            <button type="button" onClick={handleInvite}>Enviar</button>
          </div>
        </form>
      </div>
    </section>
  )
}