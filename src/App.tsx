import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Layout from './Layouts/Layout';
import ContentCategory from './pages/ContentCategory/ContentCategory';
import { useCategory } from './Contexts/CategoryContext';

function App() {
  const { selectedCategory } = useCategory();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path={`/${selectedCategory}`}
            element={
              <Layout>
                <ContentCategory />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
