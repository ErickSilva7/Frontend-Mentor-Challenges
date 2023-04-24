import { keys } from "./key list.js";
import "./keyboard.scss"

const Keyboard = ({num, setNum, oldNum, setOldNum, operator, setOperator, fontSize, setFontSize}) => {
    const keyClick = (key) => {
        let btnClassName = key.target.className;
        let btnInnerHTML = key.target.innerHTML;
        let checkequalOperation = false;
        let clickInOperationKey = false;

        if (btnClassName === "number") {
            if (checkequalOperation) {
                checkequalOperation = false;
                setNum((num = "0"));
                setOldNum((oldNum = ""));
                setOperator((operator = ""));
                setFontSize((fontSize = 3));
            }
            if (num.length != 8) {
                if (btnInnerHTML === ".") {
                    if (num === "") {
                        setNum(num + "");
                    } else if (num.includes(".")) {
                        setNum(num + "");
                    } else {
                        setNum(num + btnInnerHTML);
                    }
                } else if (num === "0") {
                    setNum(btnInnerHTML);
                } else {
                    setNum(num + btnInnerHTML);
                }
            }
        }

        if (btnClassName === "del") {
            if (checkequalOperation) {
                checkequalOperation = false;
                setNum((num = "0"));
                setOldNum((oldNum = ""));
                setOperator((operator = ""));
                setFontSize((fontSize = 3));
            }

            if (num !== "0") {
                setNum(num.slice(0, -1));
                if (num.length === 1) {
                    setNum((num = "0"));
                }
                if (num.length > 8) {
                    setFontSize((fontSize += 0.1875));
                }
            }
        }

        if (btnClassName === "operation") {
            if (checkequalOperation || oldNum === "") {
                checkequalOperation = false;
                setOperator((operator = btnInnerHTML));
                setOldNum((oldNum = num));
                setNum((num = "0"));
            } else if (clickInOperationKey) {
                setOperator((operator = btnInnerHTML));
                clickInOperationKey = false;
            } else {
                var result;
                if (operator === "+") {
                    result = parseFloat(oldNum) + parseFloat(num);
                } else if (operator === "-") {
                    result = parseFloat(oldNum) - parseFloat(num);
                } else if (operator === "x") {
                    result = parseFloat(oldNum) * parseFloat(num);
                } else {
                    result = parseFloat(oldNum) / parseFloat(num);
                }
                setOldNum((oldNum = result));
                setNum((num = "0"));
                setOperator((operator = btnInnerHTML));
            }
            setFontSize((fontSize = 3));
            clickInOperationKey = true;
        }

        if (btnClassName === "equal") {
            var result;
            if (checkequalOperation || oldNum === "") {
                setNum((num = "0"));
                setOldNum((oldNum = ""));
                setOperator((operator = ""));
                setFontSize((fontSize = 3));
            } else {
                if (operator === "+") {
                    setOldNum((oldNum = oldNum + " + " + num + " ="));
                    result = parseFloat(oldNum) + parseFloat(num);
                } else if (operator === "-") {
                    setOldNum((oldNum = oldNum + " - " + num + " ="));
                    result = parseFloat(oldNum) - parseFloat(num);
                } else if (operator === "x") {
                    setOldNum((oldNum = oldNum + " x " + num + " ="));
                    result = parseFloat(oldNum) * parseFloat(num);
                } else {
                    setOldNum((oldNum = oldNum + " ÷ " + num + " ="));
                    result = parseFloat(oldNum) / parseFloat(num);
                }
                if (result.toString().length > 8) {
                    setFontSize((fontSize = 1.5));
                }
                if (result.toString().length > 19) {
                    setNum((num = "Overflow"));
                    setOldNum((oldNum = ""));
                    setOperator((operator = "    "));
                    setFontSize((fontSize = 3));
                } else {
                    setNum((num = result));
                    setOperator((operator = ""));
                }
                checkequalOperation = true;
            }
        }

        if (btnClassName === "reset") {
            setNum((num = "0"));
            setOldNum((oldNum = ""));
            setOperator((operator = ""));
            setFontSize((fontSize = 3));
        }
    };

    return (
        <div className="keyboard">
            {keys.map((props) => (
                <button className={props.class} onClick={keyClick}>
                    {props.key}
                </button>
            ))}
        </div>
    );
};

export default Keyboard;
