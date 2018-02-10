import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';


class AppBody extends Component {
    computeDate = (event, data) => {
        console.log(data);
    }

    render() {
        return (
            <div>
                <h1 className="app-title">Download My Baby</h1>

                <p className="App-intro"></p>
                <MuiThemeProvider>
                    <DatePicker hintText="Enter your Expecting Date or Conception Date" mode="landscape"
                    onChange={this.computeDate} />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <RaisedButton label="Download" />
                </MuiThemeProvider>
                <p className="download-counter-label">Total Hits: <span>0</span></p>
            </div>
        );
    }
}

export default AppBody;

