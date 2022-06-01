import { IPhysician } from "../interfaces/Physician";
import { generateKey } from "../utils/utils";

export const MOCK_PHYSICIANS: Array<IPhysician> = [
  {
    id: generateKey("phy_"),
    name: "آقای دکتر فرشاد",
    specialty: "متخصص قلب",
    startTime: new Date("16:30"),
    remainingAppointments: 4,
  },
  {
    id: generateKey("phy_"),
    name: "خانم دکتر دهقان",
    specialty: "متخصص زنان و زایمان",
    startTime: new Date("09:00"),
    remainingAppointments: 2,
  },
];
