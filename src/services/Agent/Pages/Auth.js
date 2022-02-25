import { post } from '../request';

export default {
    login: (data) => post('login', data),
    registration: (data) => post('registration', data),
};
