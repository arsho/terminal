import data from '../data';

export function get_terminal_output_data(user_message, output_message, output_format){
    return [user_message, output_message, output_format];
}

export function get_command_list(){
    let commands = [];
    for(let key in data){
        commands.push(key);
    }
    return commands.sort();
}

export function get_command_description(command, prefix){
    for(let key in data){
        if(key === command){
            let output = [prefix];
            output.push(data[key]["description"]);
            return output;
        }
    }
    return null;
}

export function get_man_output(user_input){
    let manual_not_found = "No manual entry for ";
    let multiple_command_message = "Please entry one single command at a time";
    let unknown_exception = "Invalid command";
    let splitted_inputs = user_input.split(" ");
    let total_inputs = splitted_inputs.length;
    if(total_inputs > 2){
        return [multiple_command_message];
    }
    else if(total_inputs === 2 && splitted_inputs[0] === "man"){
        let searched_command = splitted_inputs[1];
        let output_prefix = "Showing manual for "+searched_command+":";
        let command_desription = get_command_description(searched_command, output_prefix);
        if(command_desription){
            return command_desription;
        }
        return [manual_not_found+splitted_inputs[1]];
    }
    return [unknown_exception];
}

export function get_help_output(){
    let command_list = get_command_list();
    command_list.unshift("Available commands:");
    return command_list;
}

export function get_unknown_command_output(command){
    return command + ": command not found";
}

export function get_initial_message() {
    return "Type help to see the command list";
}