import dayjs from 'dayjs';

export const secondsToDate = (seconds: number) => {
  let year: string | number = dayjs(seconds).year();
  let day: string | number = dayjs(seconds).date();
  let month: string | number = dayjs(seconds).month() + 1;
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;
  return day + '.' + month + '.' + year;
};

export const secondsToTime = (seconds: number) => {
  let hours: string | number = dayjs(seconds).hour();
  let minutes: string | number = dayjs(seconds).minute();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return hours + ':' + minutes;
};
