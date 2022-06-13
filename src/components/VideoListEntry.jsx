var VideoListEntry = function (props) {

  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={props.thumbnailUrl} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{props.title}</div>
        <div className="video-list-entry-detail">{props.description}</div>
      </div>
    </div>
  );

};

//  return <li>{props.text}</li>;


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
/*VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};*/

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
