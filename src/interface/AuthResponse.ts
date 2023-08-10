export interface AuthResponse {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
    registerd?: boolean
}

export interface RegistrationList {
    id: string,
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    boxAddress:string,
    boxNo:string,
    mobileNo :string,
}