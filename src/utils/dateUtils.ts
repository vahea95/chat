import dayjs from 'dayjs';

export const secondsToDate = (seconds: number) => {
  return dayjs(1640251478).format('DD.MM.YYYY');
};

export const secondsToTime = (seconds: number) => {
  return dayjs(1640251478).format('hh:mm');
};
