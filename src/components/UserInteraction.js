import React, {Component} from 'react';
import PreviousCommands from './PreviousCommands';
import CommandPrefix from './CommandPrefix';

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

            if(user_value === 'clear'){
                this.setState({data: []});
            }
            else if(user_value === 'dir'){
                let terminal_reply = [["help", "man", "clear"], ["changetheme", "ls", "dir"], ["whoami", "about", "pwd"]];
                let format = "table"; //single_line, multi_line, table, code
                let new_pair = [user_value, terminal_reply, format];
                let previous_data = this.state.data;
                this.setState({data: [...previous_data, new_pair]});
            }
            else{
                let terminal_reply = "User text: "+user_value;
                let format = "single_line"; //single_line, multi_line, table, code
                let new_pair = [user_value, terminal_reply, format];
                let previous_data = this.state.data;
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