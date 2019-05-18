import React, {Component} from 'react';
import CommandPrefix from './CommandPrefix';
import TableComponent from './TableComponent';
import MultiLineComponent from './MultiLineComponent';

class Command extends Component {

    render() {
        const user_command = this.props.command[0];
        const output_value = this.props.command[1];
        const output_format = this.props.command[2];
        return (
            <div>
                {user_command !== "" &&
                <div className="command">
                    <CommandPrefix/> {user_command}
                </div>
                }
                <div className="command">
                    {output_format === "table" &&
                    <TableComponent rows={output_value}/>
                    }
                    {output_format === "single_line" &&
                    <div>{output_value}</div>
                    }
                    {output_format === "multi_line" &&
                    <MultiLineComponent lines={output_value}/>
                    }
                </div>
            </div>
        );
    }
}

export default Command;
