import { useState } from "react"
import { toast } from "react-toastify";
import "./style.css"
export const SessionThird = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [desc, setDesc] = useState('')


  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

  };
  const handleInvite = () => {
    
    if (name && email && desc)
      return toast.success("Solicitação enviada com sucesso, aguarde nosso contato", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

  }
  return (
    <section className="container-sessionThird" id="contact">
      <h3>Contato </h3>
      <p>Solicite seu orçamento aqui.</p>

      <div className="container-form">
        <form action="" onSubmit={handleSubmit}>
          <label> Nome: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <label> Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label> Mensagem: </label>
          <textarea className="textarea" value={desc} onChange={(e) => setDesc(e.target.value)} required />
          <button type="submit" onClick={handleInvite}>Enviar</button>
        </form>
      </div>

    </section>
  )
}