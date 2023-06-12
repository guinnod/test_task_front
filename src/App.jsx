import { Route, Routes } from "react-router-dom"
import { HomeLayout } from "@components/templates/HomeLayout"
import { Protected } from "@components/templates/Protected"
import { Register } from "@components/pages/Register"
import { Home } from "@components/pages/Home"
import { NotFound } from "@components/pages/NotFound"
import { Login } from "@components/pages/Login"
import { Profile } from "@components/pages/Profile"
import { Logout } from "@components/pages/Logout"

function App() {

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route element={<Protected />}>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App