import { ReactComponent as SendIcon } from '../icons/Send.svg';
import { ReactComponent as AttachIcon } from '../icons/Regular.svg';
export const Input = () => {
  return (
    <div className="input">
      <div
        className="inputMessage"
        contentEditable={true}
        role="textBox"
        placeholder="Type message"
      />
      <div className="inputButtons">
        <label className="file-input-container">
          <AttachIcon className="attachIcon" />
          <input type="file" />
        </label>
        <div className="sendIcon">
          <SendIcon />
        </div>
      </div>
    </div>
  );
};
