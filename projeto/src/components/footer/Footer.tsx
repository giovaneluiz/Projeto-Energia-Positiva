import "./style.css"
export const Footer = () => {
  return (
    <footer>
      <div className="newsletter">
        <h1>Assine nossa Newsletter</h1>
        <p>Descubra como estamos transformando o mundo com energia limpa e sustentável para todos.</p>
        <input className="email" type="email" placeholder="Insira seu e-mail" />
        <div className="group-police">
          <input type="checkbox" name="police" id="police" />
          <label htmlFor="police">Declaro que li e aceito a <a href="/politica-de-privacidade">Politica de Privacidade.</a></label>
        </div>
        <button className="btn-newsletter">Assinar</button>
      </div>
      <hr />
      <p className="copy">
        &copy; 2024 Todos os direitos reservados | Desenvolvido por alunos do grupo 4 de UPX
      </p>
    </footer>
  )
}