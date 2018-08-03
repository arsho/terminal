import React, {Component} from 'react';
import CommandPrefix from './CommandPrefix';

class Command extends Component{

    render(){
        return(
            <div>
                <div className="command">
                    <CommandPrefix/> {this.props.command[0]}
                </div>
                <div className="command">
                    {this.props.command[1]}
                </div>
            </div>

        );
    }
}

export default Command;