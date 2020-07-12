import React, {Component} from 'react';

class TerminalHeader extends Component{
    render(){
        return (
            <div className="terminal_header">
                <span className="icons">
                    <i className="fa fa-minus-circle gray-colored-icon"></i>
                    <i className="fa fa-window-maximize gray-colored-icon"></i>
                    <i className="fa fa-times-circle red-colored-icon"></i>
                </span>
                support@terminal.today: ~
            </div>
        );
    }
}

export default TerminalHeader;
