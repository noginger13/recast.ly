import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';

//import defaultExport from "module-name";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideo: { snippet: { title: '', description: '' }, id: { videoId: '' } },
      videos: [],
      query: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadData = this.loadData.bind(this);
    this.searchResults = this.searchResults.bind(this);

  }

  handleChange(event) {
    event.preventDefault();
    setTimeout(searchYouTube(event.target.value, this.searchResults), 1000);
  }

  handleClick(event, video) {
    event.preventDefault();
    this.setState({ currentVideo: video });
  }

  handleSearch(event) {
    event.preventDefault();
    searchYouTube(event.target.value, this.searchResults);
  }

  searchResults(data) {
    this.setState({ videos: data});
  }

  loadData(data) {
    console.log(data);
    this.setState({ videos: data, currentVideo: data[0]});
  }

  componentDidMount() {
    searchYouTube(this.state.query, this.loadData);
  }

  render() {



    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search handleChange={this.handleChange}/></div>
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