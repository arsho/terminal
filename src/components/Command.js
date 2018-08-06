import React, {Component} from 'react';
import CommandPrefix from './CommandPrefix';
import TableComponent from './TableComponent';

class Command extends Component{

    render(){
        return(
            <div>
                <div className="command">
                    <CommandPrefix/> {this.props.command[0]}
                </div>
                <div className="command">
                    {this.props.command[2] === "table" &&
                    <TableComponent rows={this.props.command[1]}/>
                    }
                    {this.props.command[2] !== "table" &&
                    <p>
                        {this.props.command[1]}
                    </p>
                    }
                </div>
            </div>

        );
    }
}

export default Command;