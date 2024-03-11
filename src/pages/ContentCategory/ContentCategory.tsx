import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import data from '../../data/prueba.json';
import { Videos } from '../../interfaces/videos';
import { useCategory } from '../../Contexts/CategoryContext';
import './ContentCategory.css';

function ContentCategory() {
  const { selectedCategory } = useCategory();
  const [categoryVideos, setCategoryVideos] = useState<any>(null);

  useEffect(() => {
    setCategoryVideos(data.multimedia);
    console.log(data.multimedia);
  }, []);

  return (
    <>
      <h1>{selectedCategory}</h1>
      <div className="videos-container">
        {categoryVideos?.map((video: Videos, index: number) => (
          <div key={index}>
            <h1>{video.title}</h1>
            <ReactPlayer
              url={video.url}
              width="320px"
              height="240px"
              controls={true}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ContentCategory;
