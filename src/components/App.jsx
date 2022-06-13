//import exampleVideoData from 'exampleVideoData.js';
import Search from '/compiled/src/components/Search.js'; //'Search.jsx';
//import defaultExport from "module-name";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><Search /><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> view goes here</h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> view goes here</h5></div>
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