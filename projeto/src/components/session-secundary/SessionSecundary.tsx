import "./style.css"
export const SessionSecundary = () => {
  return (
    <div className="container-sessionSencudary" id="about">
      <h1>Conheça mais sobre o projeto</h1>
      <div className="container-about">
        <p>
          O Projeto Energia Positiva faz parte de um movimento global focado em equilibrar propósito e sustentabilidade.
          Esses são os nossos compromissos e boas práticas em prol do desenvolvimento do setor, da preservação ambiental e
          conscientização sobre questões de responsabilidade social e do trabalho colaborativo.
          Aqui você encontrará nosso caminho na construção de uma realidade mais equilibrada.
        </p>

        <p>Nós inovamos, desafiamos os processos existentes, nos esforçamos para realizar cada mudança proposta e com velocidade avaliamos
          os resultados obtidos; adaptamos-nos com rapidez às mudanças do mercado em que estamos e fazemos isso com criatividade e resiliência.
          Somos inconformados por natureza.</p>
      </div>
      <div className="container-mvv">
        <div className="card-sessionSencudary">
          <div className="card-title">
            <img src="/img/missao.webp" />
            <h2>Missão</h2>
          </div>
          <p>Nossa missão é promover o acesso a energia renovável para as populações de baixa renda, proporcionando soluções acessíveis,
            sustentáveis e inovadoras que melhorem suas condições de vida e contribuam para um futuro mais justo e equitativo.</p>
        </div>
        <div className="card-sessionSencudary">
          <div className="card-title">
            <img src="/img/visao.webp" />
            <h2>Visão</h2>
          </div>
          <p>Ser referência como empresa de energia em Minas Gerais e entregar projetos de alto impacto,
            consolidando nossa posição como líderes regionais no setor e contribuindo ativamente para o desenvolvimento sustentável e a prosperidade da região.</p>
        </div>
        <div className="card-sessionSencudary">
          <div className="card-title">
            <img src="/img/valores.webp" />
            <h2>Valores</h2>
          </div>
          <p>Comprometimento, melhoria contínua, inovação, integridade, ética, transparência, eficácia, Sustentabilidade e Responsabilidade Social.</p>
        </div>
      </div>
    </div>
  )
}