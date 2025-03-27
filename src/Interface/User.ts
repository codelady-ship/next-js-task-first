// Interface for Address
export interface Address {
  street: string;
  city: string;
}

// Interface for Company
export  interface Company {
  name: string;
}

// Interface for User
export  interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: Address;
  company: Company;
}