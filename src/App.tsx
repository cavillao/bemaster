import { useEffect, useState } from 'react';
import { useCategory } from './Contexts/CategoryContext';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Layout from './Layouts/Layout';
import ContentCategory from './pages/ContentCategory/ContentCategory';
import ContentDetails from './pages/ContentDetails/ContentDetails';
import AllCategories from './pages/AllCategories/AllCategories';
import { Videos } from './interfaces/videos';

function App() {
  const { selectedCategory } = useCategory();
  const [videoSelected, setVideoSelected] = useState<any>(null);

  const getVideo = (video: Videos) => {
    setVideoSelected(video);
  };

  useEffect(() => {
    console.log(selectedCategory);
  });

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={'/login'} />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
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
                <ContentCategory getVideo={getVideo} />
              </Layout>
            }
          />
          <Route
            path={`/${videoSelected?.category}/${videoSelected?.id.toString()}`}
            element={
              <Layout>
                <ContentDetails videoSelected={videoSelected} />
              </Layout>
            }
          />
          <Route
            path={'/categories'}
            element={
              <Layout>
                <AllCategories getVideo={getVideo} />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
