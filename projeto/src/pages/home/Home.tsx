import { ToastContainer } from "react-toastify"
import { Footer } from "../../components/footer/Footer"
import { NavBar } from "../../components/navbar/NavBar"
import { SessionSecundary } from "../../components/session-secundary/SessionSecundary"
import { SessionThird } from "../../components/session-third/SessionThird"
import { Session } from "../../components/session/Session"

export const Home = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Same as */}
      <ToastContainer />
      <NavBar />
      <Session />
      <SessionSecundary />
      <SessionThird />
      <Footer />
    </>

  )
}