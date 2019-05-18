import React, {Component} from 'react';
import PreviousCommands from './PreviousCommands';
import CommandPrefix from './CommandPrefix';
import data from '../data';
import {get_terminal_output_data, get_command_list} from "../services/TerminalServices";

class UserInteraction extends Component{
    constructor(props){
        super(props);
        this.state = {data:[]};
    }

    _handleBlur = (event) => {
        event.target.focus();
    }

    _handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            let user_value = event.target.value.toLowerCase();
            let previous_data = this.state.data;
            let valid_command = false;
            for(let key in data){
                let value = data[key];
                if(key === user_value){
                    valid_command = true;
                    let format = value["format"];
                    // Check if user enters output only command or action command
                    if(format!=="command"){
                        let new_terminal_output = get_terminal_output_data(user_value, value["output"], format);
                        this.setState({data: [...previous_data, new_terminal_output]});
                    }
                    else{
                        if(key==="clear"){
                            this.setState({data: []});
                        }
                        else if(key==="help"){
                            let command_list = get_command_list();
                            command_list.unshift("Available commands:");
                            let format = "multi_line";
                            let current_command_output = get_terminal_output_data(user_value, command_list, format);
                            this.setState({data: [...previous_data, current_command_output]});
                        }
                    }
                }
            }


            if(valid_command === false){
                let terminal_output = user_value+": command not found";
                let format = "single_line"; //single_line, multi_line, table, code
                let new_pair = get_terminal_output_data(user_value, terminal_output, format);
                this.setState({data: [...previous_data, new_pair]});
            }
            event.target.value = "";
        }
    };
    render(){
        return(
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
