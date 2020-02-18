import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavBar from './components/NavBar';
import { Search, Grid, Header, Segment } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import { MultiList } from '@appbaseio/reactivesearch';
import { ReactiveBase } from '@appbaseio/reactivesearch';


class App extends React.Component {
    render() {
        return (
          <div>
            <NavBar/>
          </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
