import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

import { Home } from "./pages/home/Home"
import "./style/index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SessionThird } from "./components/session-third/SessionThird";
import { SessionSecundary } from "./components/session-secundary/SessionSecundary";
import { Session } from "./components/session/Session";

function App() {


  return (
    <BrowserRouter>
      <div>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        <Home />
      </div>
      <Routes>
        <Route path="/contant" element={<SessionThird />} />
        <Route path="/about" element={<SessionSecundary />} />
        <Route path="/home" element={<Session />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
