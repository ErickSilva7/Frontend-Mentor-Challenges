import { keys } from "./key list.js";
import "./keyboard.scss";

let checkEqualOperation = false;
let clickInOperationKey = false;

const Keyboard = ({
    num,
    setNum,
    oldNum,
    setOldNum,
    operator,
    setOperator,
}) => {
    const keyClick = (key) => {
        let btnClassName = key.target.className;
        let btnInnerHTML = key.target.innerHTML;

        if (btnClassName === "number") {
            if (checkEqualOperation) {
                checkEqualOperation = false;
                setNum((num = "0"));
                setOldNum((oldNum = ""));
                setOperator((operator = ""));
            }

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

        if (btnClassName === "del") {
            if (checkEqualOperation) {
                checkEqualOperation = false;
                setNum((num = "0"));
                setOldNum((oldNum = ""));
                setOperator((operator = ""));
            }

            if (num !== "0") {
                setNum(num.toString().slice(0, -1));
                setOldNum((oldNum = ""));
                if (num.length === 1) {
                    setNum((num = "0"));
                }
            }
        }

        if (btnClassName === "operation") {
            if (checkEqualOperation || oldNum === "") {
                setOperator((operator = btnInnerHTML));
                setOldNum((oldNum = num));
                setNum((num = "0"));
                checkEqualOperation = false;
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
            clickInOperationKey = true;
        }

        if (btnClassName === "equal") {
            if (checkEqualOperation === false) {
                checkEqualOperation = true;
                if (oldNum !== "") {
                    var result;
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
                    setNum((num = result));
                    setOperator((operator = ""));
                }
            }
        }

        if (btnClassName === "reset") {
            setNum((num = "0"));
            setOldNum((oldNum = ""));
            setOperator((operator = ""));
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
