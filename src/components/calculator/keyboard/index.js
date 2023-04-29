import { keys } from "./key list.js";
import "./keyboard.scss";

let checkEqualOperation = false;

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
        let result;

        if (btnClassName === "number") {
            if (num === "infinity") {
                setNum((num = "0"));
            }
            if (checkEqualOperation) {
                checkEqualOperation = false;
                setOldNum((oldNum = ""));
                setOperator((operator = ""));
            }

            if (btnInnerHTML === "π") {
                setNum((num = Math.PI));
            } else {
                if (btnInnerHTML === ".") {
                    if (num === "") {
                        setNum(num + "");
                    } else if (num.toString().includes(".")) {
                        setNum(num + "");
                    } else {
                        setNum(num + btnInnerHTML);
                    }
                } else if (num === "0") {
                    setNum(btnInnerHTML);
                } else if (num.toString().length < 15) {
                    setNum((num = parseFloat((num += btnInnerHTML))));
                }
            }
        }

        if (btnClassName === "del") {
            if (checkEqualOperation) {
                checkEqualOperation = false;
                setNum((num = "0"));
                setOldNum((oldNum = ""));
                setOperator((operator = ""));
            }

            if (num !== "0" && num.toString().length !== 1) {
                num = num.toString().slice(0, -1);
                setNum((num = parseFloat((num += btnInnerHTML))));
            } else {
                setNum((num = "0"));
            }
        }

        if (btnClassName === "Operation") {
            if (checkEqualOperation || oldNum === "") {
                setOperator((operator = btnInnerHTML));
                setOldNum((oldNum = num));
                setNum((num = "0"));
                checkEqualOperation = false;
            } else {
                if (operator === "+") {
                    result = parseFloat(oldNum) + parseFloat(num);
                } else if (operator === "-") {
                    result = parseFloat(oldNum) - parseFloat(num);
                } else if (operator === "x") {
                    result = parseFloat(oldNum) * parseFloat(num);
                } else if (operator === "÷") {
                    result = parseFloat(oldNum) / parseFloat(num);
                } else {
                    result = parseFloat(oldNum) ** parseFloat(num);
                }
                setOldNum((oldNum = result));
                setNum((num = "0"));
                setOperator((operator = btnInnerHTML));
            }
        }

        if (btnClassName === "equal") {
            if (checkEqualOperation === false) {
                checkEqualOperation = true;
                if (oldNum !== "") {
                    if (operator === "+") {
                        setOldNum((oldNum = oldNum + " + " + num + " ="));
                        result = parseFloat(oldNum) + parseFloat(num);
                    } else if (operator === "-") {
                        setOldNum((oldNum = oldNum + " - " + num + " ="));
                        result = parseFloat(oldNum) - parseFloat(num);
                    } else if (operator === "x") {
                        setOldNum((oldNum = oldNum + " x " + num + " ="));
                        result = parseFloat(oldNum) * parseFloat(num);
                    } else if (operator === "÷") {
                        setOldNum((oldNum = oldNum + " ÷ " + num + " ="));
                        result = parseFloat(oldNum) / parseFloat(num);
                    } else {
                        setOldNum((oldNum = oldNum + " ^ " + num + " ="));
                        result = parseFloat(oldNum) ** parseFloat(num);
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

        if (btnClassName === "changeTypeNumber") {
            if (checkEqualOperation) {
                checkEqualOperation = false;
                setOldNum((oldNum = ""));
                setOperator((operator = ""));
            }
            setNum((num *= -1));
        }

        if (btnClassName === "percentage") {
            if (checkEqualOperation) {
                checkEqualOperation = false;
                setOldNum((oldNum = ""));
                setOperator((operator = ""));
            }
            setNum((num /= 100));
        }

        if (btnClassName === "factorial") {
            if (num.toString().length <= 2) {
                if (!/\./.test(num)) {
                    setOldNum((oldNum = `${num}! =`));
                    setOperator((operator = ""));
                    if (num === "0") {
                        setNum((num = 1));
                    } else {
                        for (var i = num - 1; i >= 1; i--) {
                            num *= i;
                        }
                        setNum(num);
                    }
                }
            } else {
                setNum((num = "infinity"));
            }
            checkEqualOperation = true;
        }

        if (btnClassName === "square-root") {
            let result = num ** 0.5;
            if (result) {
                setOldNum((oldNum = `√${num} =`));
                setNum((num = result));
                setOperator((operator = ""));
                checkEqualOperation = true
            }
        }
    };

    return (
        <div className="keyboard">
            {keys.map((props) => (
                <button
                    key={props.id}
                    className={props.class}
                    onClick={keyClick}
                >
                    {props.key}
                </button>
            ))}
        </div>
    );
};

export default Keyboard;
