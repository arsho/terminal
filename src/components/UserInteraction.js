import React, {Component} from 'react';
import PreviousCommands from './PreviousCommands';
import CommandPrefix from './CommandPrefix';
import data from '../data';
import {
    get_terminal_output_data,
    get_help_output,
    get_man_output,
    get_initial_message,
    get_unknown_command_output
} from "../services/TerminalServices";

class UserInteraction extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    _clear_screen(){
        let initial_message = get_initial_message();
        let initial_output = get_terminal_output_data("", initial_message, "single_line");
        this.setState({data: [initial_output]});
    }

    componentDidMount() {
        this._clear_screen();
    }

    _handleBlur = (event) => {
        event.target.focus();
    }

    _handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            let user_value = event.target.value;
            let previous_data = this.state.data;
            let valid_command = false;
            if (user_value.startsWith("man")) {
                valid_command = true;
                let man_output = get_man_output(user_value);
                let current_command_output = get_terminal_output_data(user_value, man_output, "multi_line");
                this.setState({data: [...previous_data, current_command_output]});
            }
            else {
                for (let key in data) {
                    let value = data[key];
                    if (key === user_value || user_value.startsWith("man")) {
                        valid_command = true;
                        let format = value["format"];
                        // Check if user enters output only command or action command
                        if (format !== "command") {
                            let new_terminal_output = get_terminal_output_data(user_value, value["output"], format);
                            this.setState({data: [...previous_data, new_terminal_output]});
                        }
                        else {
                            if (key === "clear") {
                                this._clear_screen();
                            }
                            else if (key === "help") {
                                let help_output = get_help_output();
                                let current_command_output = get_terminal_output_data(user_value, help_output, "multi_line");
                                this.setState({data: [...previous_data, current_command_output]});
                            }
                        }
                    }
                }

            }

            if (valid_command === false) {
                let terminal_output = get_unknown_command_output(user_value);
                let current_command_output = get_terminal_output_data(user_value, terminal_output, "single_line");
                this.setState({data: [...previous_data, current_command_output]});
            }
            event.target.value = "";
        }
    };

    render() {
        return (
            <div>
                <PreviousCommands data={this.state.data}/>
                <CommandPrefix/>
                <input className="command-input" type="text"
                       onKeyPress={this._handleKeyPress} autoFocus
                       onBlur={this._handleBlur}
                />
            </div>
        );
    }
}

export default UserInteraction;
