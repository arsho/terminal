import data from '../data';

export function get_terminal_output_data(user_message, output_message, output_format){
    return [user_message, output_message, output_format];
}

export function get_command_list(){
    var commands = [];
    for(let key in data){
        commands.push(key);
    }
    return commands.sort();
}