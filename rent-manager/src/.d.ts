type UserType = {
    id: string,
    email: string,
    name: string,
    phone_number: string,
    type: "tenant" | "landlord"
    landlord_rents: Rent[], 
    tenant_rents: Rent[], 
}

type RentType = {
    id: string,
    name: string,
    rent_identification: string,
    landlord: UserType,
    tenant: UserType,
    image: string
}

type UtilityType = {
    id: string,
    name: string,
    value: number,
    price_per_unit: number,
    currency: string,
    index: number,
    units: string,
}

type UtilitiesType = {
    id: string,
    rent: RentType,
    utilities: UtilityType[],
}
