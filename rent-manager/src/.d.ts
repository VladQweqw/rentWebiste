type UserType = {
    id: string,
    email: string,
    name: string,
    phone_number: string,
    type: "tenant" | "landlord"
    rents: Rent[] 
}

type RentType = {
    name: string
}