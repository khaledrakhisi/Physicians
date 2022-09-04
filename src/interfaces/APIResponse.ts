import { IPhysician } from "./Physician";

export interface IAPIResponse {
  status: string;
  message: string;
  data: {
    count: number;
    doctorsLists: Array<IPhysician>;
  };
}
