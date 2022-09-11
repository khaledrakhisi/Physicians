export const generateKey = (pre: string) => {
  return `${pre}_${new Date().getTime()}`;
};

export function generateLightColorHex() {
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += (
      "0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}

export function getTodayFullDate() {
  const options = { year: "numeric", month: "long", day: "numeric" } as const;
  return new Date().toLocaleDateString("fa-IR", options);
}

export function getTodayDate() {
  return new Date().toDateString();
}

export function getCurrentTime() {
  return new Date().toTimeString();
}

export function convertTo24HoursFormat(time: Date) {
  return `${time.getHours() < 9 ? `0${time.getHours()}` : time.getHours()}:${
    time.getMinutes() < 9 ? `0${time.getMinutes()}` : time.getMinutes()
  }`;
  // return time.toLocaleTimeString("en-US");
}

export function convertMsToHM(milliseconds: number) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  // seconds = seconds % 60;
  // // 👇️ if seconds are greater than 30, round minutes up (optional)
  // minutes = seconds >= 30 ? minutes + 1 : minutes;

  // minutes = minutes % 60;

  // // 👇️ If you don't want to roll hours over, e.g. 24 to 00
  // // 👇️ comment (or remove) the line below
  // // commenting next line gets you `24:00:00` instead of `00:00:00`
  // // or `36:15:31` instead of `12:15:31`, etc.
  // hours = hours % 24;

  return {
    hours,
    minutes,
    seconds,
  };
}
