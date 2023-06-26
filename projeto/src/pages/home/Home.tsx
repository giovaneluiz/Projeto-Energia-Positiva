import { NavBar } from "../../components/navbar/NavBar"
import { SessionSecundary } from "../../components/session-secundary/SessionSecundary"
import { Session } from "../../components/session/Session"

export const Home = () => {
  return (
    <>
      <NavBar />
      <Session />
      <SessionSecundary />
    </>

  )
}