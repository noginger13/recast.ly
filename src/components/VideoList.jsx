import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoListEntry from '/compiled/src/components/VideoListEntry.js';

var VideoList = function () {

  return (
    <div className="video-list">
      <div>
        {exampleVideoData.map((video) => {
          return <VideoListEntry key={video.id.videoId} title={video.snippet.title} description={video.snippet.description} thumbnailUrl={video.snippet.thumbnails.default.url}></VideoListEntry>;
        })}
      </div>
    </div>
  );


  // PropTypes tell other developers what `props` a component expects
  // Warnings will be shown in the console when the defined rules are violated
  /*VideoList.propTypes = {
      videos: PropTypes.array.isRequired
    };*/
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
