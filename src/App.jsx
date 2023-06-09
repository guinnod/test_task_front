import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/molecules/Layout"
import { Protected } from "./components/molecules/Protected"
import { Register } from "@pages/Register"
import { Home } from "@pages/Home"
import { NotFound } from "@pages/NotFound"
import { Login } from "@pages/Login"
import { Profile } from "@pages/Profile"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<Protected />}>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App