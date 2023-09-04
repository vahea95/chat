import { ITime } from '../Interfaces/ITime';

export const Time = (props: ITime) => {
  return (
    <div className={props.className}>
      <span>{props.time}</span>
    </div>
  );
};
