import React, {Component} from 'react';
import Header from './Header';
import UserInteraction from './UserInteraction';

class TerminalBody extends Component{
    render(){
        return(
            <div className="terminal_body">                
                <UserInteraction/>
            </div>
        );
    }
}

export default TerminalBody;
