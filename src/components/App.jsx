import exampleVideoData from '/src/data/exampleVideoData.js';
import Search from '/compiled/src/components/Search.js';
import VideoList from '/compiled/src/components/VideoList.js';
import VideoPlayer from '/compiled/src/components/VideoPlayer.js';
//import defaultExport from "module-name";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData
    };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event, video) {
    event.preventDefault();
    this.setState({currentVideo: video});
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {<div><VideoPlayer video={this.state.currentVideo} /></div>}
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videos} handleClick={this.handleClick} /></div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
ReactDOM.render(<App />, document.getElementById('app'));