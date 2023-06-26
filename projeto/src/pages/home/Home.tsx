import { Footer } from "../../components/footer/Footer"
import { NavBar } from "../../components/navbar/NavBar"
import { SessionSecundary } from "../../components/session-secundary/SessionSecundary"
import { SessionThird } from "../../components/session-third/SessionThird"
import { Session } from "../../components/session/Session"

export const Home = () => {
  return (
    <>
      <NavBar />
      <Session />
      <SessionSecundary />
      <SessionThird />
      <Footer />
    </>

  )
}