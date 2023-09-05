import sendIcon from '../icons/sendIcon/sendIcon.svg';
export const Input = () => {
  return (
    <div className="input">
      <div
        className="inputMessage"
        contentEditable={true}
        role="textBox"
        placeholder="Type message"
      ></div>
      <div className="inputButtons">
        <label className="file-input-container">
          <div className="attachIcon" />
          <input type="file" />
        </label>
        <div className="sendIcon">
          <img src={sendIcon}></img>
        </div>
      </div>
    </div>
  );
};
