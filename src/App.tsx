import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Layout from './Layouts/Layout'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Login /> */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
