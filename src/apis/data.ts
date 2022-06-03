import { IPhysician } from "../interfaces/Physician";
import { generateKey } from "../utils/utils";

export const MOCK_PHYSICIANS: Array<IPhysician> = [
  {
    id: generateKey("phy_1_"),
    name: "آقای دکتر فرشاد",
    specialty: "درمانگاه قلب",
    startTime: "16:30",
    remainingAppointments: 4,
  },
  {
    id: generateKey("phy_2_"),
    name: "خانم دکتر دهقان",
    specialty: "درمانگاه زنان و زایمان",
    startTime: "09:00",
    remainingAppointments: 2,
  },
  {
    id: generateKey("phy_3_"),
    name: "خانم دکتر برات",
    specialty: "درمانگاه پوست و مو",
    startTime: "08:30",
    remainingAppointments: 13,
  },
  {
    id: generateKey("phy_4_"),
    name: "آقای دکتر حیاتی",
    specialty: "درمانگاه کلیه و مجاری ادراری",
    startTime: "08:30",
    remainingAppointments: 10,
  },
];
