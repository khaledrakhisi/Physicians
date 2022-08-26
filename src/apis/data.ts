import { IPhysician } from "../interfaces/Physician";
import { generateKey } from "../utils/utils";

export const MOCK_PHYSICIANS: Array<IPhysician> = [
  {
    id: generateKey("phy_1_"),
    name: "آقای دکتر فرشاد",
    specialty: "درمانگاه قلب",
    startTime: "16:30",
    remainingAppointments: 15,
  },
  {
    id: generateKey("phy_2_"),
    name: "خانم دکتر دهقان",
    specialty: "درمانگاه زنان و زایمان",
    startTime: "16:00",
    remainingAppointments: 2,
  },
  {
    id: generateKey("phy_3_"),
    name: "خانم دکتر برات",
    specialty: "درمانگاه پوست و مو",
    startTime: "16:30",
    remainingAppointments: 13,
  },
  {
    id: generateKey("phy_4_"),
    name: "آقای دکتر حیاتی",
    specialty: "درمانگاه کلیه و مجاری ادراری",
    startTime: "10:30",
    remainingAppointments: 10,
  },
  {
    id: generateKey("phy_5_"),
    name: "آقای دکتر نژادیان",
    specialty: "درمانگاه اطفال",
    startTime: "09:00",
    remainingAppointments: 0,
  },
  {
    id: generateKey("phy_6_"),
    name: "خانم دکتر میرزایی",
    specialty: "درمانگاه مغز و اعصاب",
    startTime: "17:30",
    remainingAppointments: 11,
  },
  {
    id: generateKey("phy_7_"),
    name: "خانم دکتر بدری",
    specialty: "درمانگاه مغز و اعصاب",
    startTime: "08:30",
    remainingAppointments: 11,
  },
  {
    id: generateKey("phy_8_"),
    name: "خانم دکتر کشویی",
    specialty: "درمانگاه مغز و اعصاب",
    startTime: "16:30",
    remainingAppointments: 11,
  },
  {
    id: generateKey("phy_8_"),
    name: "خانم دکتر محرابی",
    specialty: "درمانگاه مغز و اعصاب",
    startTime: "17:30",
    remainingAppointments: 11,
  },
];
