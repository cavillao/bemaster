import ReactPlayer from 'react-player';
import { VideosProp } from '../../types/props';

function ContentDetails({ videoSelected }: VideosProp) {
  return (
    <>
      <h2>{videoSelected?.title}</h2>
      <ReactPlayer
        url={videoSelected?.url}
        width="100%"
        height="70vh"
        controls={true}
      />
      <p>{videoSelected?.resume}</p>
    </>
  );
}

export default ContentDetails;
