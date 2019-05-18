import React, {Component} from 'react';
import CommandPrefix from './CommandPrefix';
import TableComponent from './TableComponent';
import MultiLineComponent from './MultiLineComponent';

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
                    {this.props.command[2] === "single_line" &&
                        <div>{this.props.command[1]}</div>
                    }
                    {this.props.command[2]=== "multi_line" &&
                        <MultiLineComponent lines={this.props.command[1]}/>
                    }
                </div>
            </div>
        );
    }
}

export default Command;
