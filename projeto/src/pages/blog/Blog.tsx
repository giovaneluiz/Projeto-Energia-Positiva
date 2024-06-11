import { Card } from '../../components/card/Card'
import { Footer } from '../../components/footer/Footer'
import { NavBar } from '../../components/navbar/NavBar'
import './style.css'
export const Blog = () => {
  return (
    <>
      <NavBar />
      <main>
        <h1>Blog Energia Positiva - Tudo sobre energia solar!</h1>
        <article>
          <div>
            <Card tag='Energia' title='Televisão (TV) gasta muita energia? Aprenda como calcular!' description='Leia Mais'></Card>
            <Card tag='Economia' title='Como ter desconto na conta de luz? Tarifa Social e outras opções!' description='Leia Mais'></Card>
          </div>
          <div>
            <Card tag='Energia' title='Energia solar no Brasil: resumo do mercado em 2024!' description='Leia Mais'></Card>
            <Card tag='Energia' title='5 das maiores empresas de energia solar do Brasil em 2024.' description='Leia Mais'></Card>
          </div>
          <div>
            <Card tag='Economia' title='Tarifa social de energia elétrica: o que é, como solicitar e quem tem direito?' description='Leia Mais'></Card>
            <Card tag='Economia' title='Conta de luz muito alta? Saiba aqui como resolver!' description='Leia Mais'></Card>
          </div>
        </article>
        <a href="#" className='load-newsletter'>Carregar mais noticias</a>
      </main>
      <Footer />
    </>
  )
}