import { useState, useEffect } from 'react';
import { categories } from '../../constants/categories';
import data from '../../data/prueba.json';
import { Videos } from '../../interfaces/videos';
import { Link } from 'react-router-dom';
import '../ContentCategory/ContentCategory.css';
import './AllCategories.css';
import { categoriesDataTitles } from '../../constants/categoriesData';

function AllCategories({ getVideo }: any) {
  const [categoryVideos, setCategoryVideos] = useState<any>(null);

  const sendVideo = (video: Videos) => {
    getVideo(video);
  };

  useEffect(() => {
    setCategoryVideos(data.multimedia);
  }, []);

  return (
    <>
      <h1>Todas las Categorías</h1>
      <div className="all-categories-container">
        {categories.map((category: string) => (
          <div>
            <h2>{categoriesDataTitles[category]}</h2>
            <div className="videos-container">
              {categoryVideos
                ?.filter(
                  (categoryList: Videos) => categoryList.category === category
                )
                .map((video: Videos, index: number) => (
                  <div key={index} onClick={() => sendVideo(video)}>
                    <div className="video-image">
                      <Link to={`/${video.category}/${video.id.toString()}`}>
                        Video Image
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllCategories;
