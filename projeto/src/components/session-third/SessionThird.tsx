import "./style.css"
export const SessionThird = () => {
  return (
    <section className="container-sessionThird">
      <h3>Contato</h3>

      <div className="container-form">
        <form action="">
          <label> Nome: </label>
          <input type="text" />

          <label> Email: </label>
          <input type="email" />

          <label> Mensagem: </label>
          <textarea className="textarea"/>

          <button type="submit">Enviar</button>


        </form>

      </div>

    </section>
  )
}