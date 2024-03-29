import { useEffect, useState } from 'react';
import data from '../../data/prueba.json';
import { Videos } from '../../interfaces/videos';
import { useCategory } from '../../Contexts/CategoryContext';
import './ContentCategory.css';
import { Link } from 'react-router-dom';
import { categoriesDataTitles } from '../../constants/categoriesData';

function ContentCategory({ getVideo }: any) {
  const { selectedCategory } = useCategory();
  const [categoryVideos, setCategoryVideos] = useState<any>(null);

  const sendVideo = (video: Videos) => {
    getVideo(video);
  };

  useEffect(() => {
    setCategoryVideos(data.multimedia);
  }, []);

  return (
    <>
      <h1>{categoriesDataTitles[selectedCategory]}</h1>
      <div className="videos-container">
        {categoryVideos
          ?.filter(
            (categoryList: Videos) => categoryList.category === selectedCategory
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
    </>
  );
}

export default ContentCategory;
