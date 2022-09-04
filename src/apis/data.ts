import { IAPIResponse } from "../interfaces/APIResponse";

export const MOCK_API_RESPONSE: IAPIResponse = {
  status: "success",
  message: "",
  data: {
    count: 10,
    doctorsLists: [
      {
        doctorName: "دکتر معصومه یونسی",
        clinic: "درمانگاه لاپاراسکوپی زنان",
        specialty: "فلوشیپ ناباروری",
        image: null,
        appointmentTime: "10:00:00",
        defined: 5,
        transfer: 6,
        get: 1,
        total: 11,
        remain: 10,
      },
    ],
  },
};
