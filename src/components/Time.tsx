import { ITime } from '../interfaces/ITime';

export const Time = (props: ITime) => {
  return (
    <div className={props.className}>
      <span>{props.time}</span>
    </div>
  );
};
