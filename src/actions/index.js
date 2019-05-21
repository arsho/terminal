import { UBUNTU_TERMINAL, POWERSHELL } from 'src/actions/types';

export function styleSelector(css_class = UBUNTU_TERMINAL, action) {
    switch (action.type) {
        case UBUNTU_TERMINAL:
            return UBUNTU_TERMINAL;
        case POWERSHELL:
            return POWERSHELL;
        default:
            return css_class;
    }
}