import { jwtDecode } from 'jwt-decode';

export const jwtDecodeFunction =()=>{
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    return decodedToken
}

export const AdminJwtDecodeFunction =()=>{
    const decodedToken = jwtDecode(localStorage.getItem('admintoken'));
    return decodedToken
}