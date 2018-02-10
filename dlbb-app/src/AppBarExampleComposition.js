import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <MuiThemeProvider>
        <FlatButton {...this.props} label="Login" />
      </MuiThemeProvider>
    );
  }
}

const Logged = (props) => (
  <MuiThemeProvider>
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  </MuiThemeProvider>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarExampleComposition extends Component {
  state = {
    logged: true,
  };

  logIn = () => {
    this.setState({logged: true});
  }

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Toggle
            label="Logged"
            defaultToggled={true}
            onToggle={this.handleChange}
            labelPosition="right"
            className="log-toggle"
            toggled={this.state.logged}
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <AppBar
            title="Title"
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={this.state.logged ? <Logged /> : <Login onClick={this.logIn}/>}
          />
        </MuiThemeProvider> 
      </div>
    );
  }
}

export default AppBarExampleComposition;
