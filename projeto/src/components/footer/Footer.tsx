import { useState } from "react"
import { toast } from "react-toastify"
import "./style.css"

export const Footer = () => {
  const [emailNewsletter, setEmailNewsletter] = useState('')

  const activeNewsLetter = () => {
    if (emailNewsletter !== '') {
      toast.success("Obrigado por se inscrever! Fique atento para não perder promoções e novidades!"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
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
    <footer>
      <div className="newsletter">
        <h1>Assine nossa Newsletter</h1>
        <p>Descubra como estamos transformando o mundo com energia limpa e sustentável para todos.</p>
        <input className="email" type="email" placeholder="Insira seu e-mail" value={emailNewsletter} onChange={e => setEmailNewsletter(e.target.value)}/>
        <div className="group-police">
          <input type="checkbox" name="police" id="police" />
          <label htmlFor="police">Declaro que li e aceito a <a href="/politica-de-privacidade">Politica de Privacidade.</a></label>
        </div>
        <button className="btn-newsletter" onClick={activeNewsLetter}>Assinar</button>
      </div>
      <hr />
      <p className="copy">
        &copy; 2024 Todos os direitos reservados | Desenvolvido por alunos do grupo 4 de UPX
      </p>
    </footer>
  )
}