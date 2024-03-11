import { useEffect } from 'react';
import ReactPlayer from 'react-player';

function ContentDetails({ videoSelected }: any) {
  useEffect(() => {
    console.log('video seleccionado', videoSelected);
  });
  return (
    <>
      <h1>Detalles</h1>
      <h2>{videoSelected.title}</h2>
      <ReactPlayer
        url={videoSelected.url}
        width="320px"
        height="240px"
        controls={true}
      />
      <p>{videoSelected.resume}</p>
    </>
  );
}

export default ContentDetails;
