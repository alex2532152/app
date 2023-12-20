export type User = {
    address: UserAddress;
    age: number;
    bank: Bank;
    birthDate: string;
    bloodGroup: string;
    company: Company;
    domain: string;
    ein: string;
    email: string;
    eyeColor: string;
    firstName: string;
    gender: string;
    hair: UserHair;
    id: number;
    image: string;
    ip: string;
    lastName: string;
    macAddress: string;
    maidenName: string;
    password: string;
    phone: string;
    ssn: string;
    university: string;
    userAgent: string;
    username: string;
    weight: number;
}

type Coordinates = {
    lat: number;
    lng: number;
}

type Address = {
    address: string;
    postalCode: string;
    state: string;
    coordinates: Coordinates;
}

type UserAddress = Address;

type Bank = {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

type CompanyAddress = Address & {
    city: string;
}

type Company = {
    address: CompanyAddress;
    department: string;
    name: string;
    title: string;
}

type UserHair = {
    color: string;
    type: string;
}

