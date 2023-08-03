import sendIcon from '../icons/sendIcon/sendIcon.svg'
import attachIcon from '../icons/attachIcon/attachIcon.svg'
export const Input = () => {
    return (
        <div className="input">
            <div className="inputMessage" contentEditable={true}>Type message</div>
            <div className="inputButtons">
                <div>
                    <img src={attachIcon}></img>

                </div>
                <div>
                    <img src={sendIcon}></img>
                </div>
            </div>
        </div>
    )
}

