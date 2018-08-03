import React, {Component} from 'react';

class TerminalHeader extends Component{
    render(){
        return (
            <div className="terminal_header">
                <i className="fa fa-times-circle"></i>
                <i className="fa fa-minus-circle"></i>
                <i className="fa fa-window-maximize"></i>
                support@terminal.today: ~
            </div>
        );
    }
}

export default TerminalHeader;