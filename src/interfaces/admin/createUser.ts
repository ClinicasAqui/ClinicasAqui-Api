export interface ICreateUser {
    name: string
    email: string
    password: string
    cpf: string
    avatar?: string
    age: number
}

export interface ICreateCLinic {
    name : string
    cnpj? : string
    authenticated? : boolean
    descripition? : string
    phone? : string
    clinicAddress? : IUpdateClinicAddress
    CorporationName? : string
    treatments? : string[]
    insurances? : string[]
    healthPlans? : string[]
    categories? : string[]
}

export interface IUpdateClinicAddress {
    country : string
    city : string
    state : string
    zipCode : string
    distict : string
    way : string
    number : string
}