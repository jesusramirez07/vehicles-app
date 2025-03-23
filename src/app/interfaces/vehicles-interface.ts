
export interface ResponseVehiclesList {
  Count: number;
  Message: string;
  SearchCriteria: any;
  Results: Manufacturer[];
}
export interface Manufacturer {
  Country: string;
  Mfr_CommonName: string;
  Mfr_ID: number;
  Mfr_Name: string;
  VehicleTypes: VehicleType[];
}

export interface VehicleType {
  IsPrimary: boolean;
  Name: string;
}
