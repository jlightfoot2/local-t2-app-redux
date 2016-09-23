import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
/**
 * Alerts user to updates
 */
class AppDialog extends React.Component {

  render () {
    var {open, onClick, message} = this.props;
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={onClick}
      />
    ];

    return (
        <Dialog
          actions={actions}
          modal={true}
          open={open}
          onRequestClose={onClick}
        >
          {message}
        </Dialog>
    );
  }
}

export default AppDialog;