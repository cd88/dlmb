import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


class AppBody extends Component {
    render() {
        return (
            <div>
                <h1 className="app-title">Welcome to React</h1>
                <p className="App-intro">Hit the button for relief</p>
                <MuiThemeProvider>
                    <RaisedButton label="Download" />
                </MuiThemeProvider>
                <p className="download-counter-label">Total Hits: <span>0</span></p>
            </div>
        );
    }
}

export default AppBody;

