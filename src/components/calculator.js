import { useState } from "react";
import "./calculator.scss";

let checkEqualOperation = false;

const Calculator = () => {
    var keys = [
        { class: "number", key: "7" },
        { class: "number", key: "8" },
        { class: "number", key: "9" },
        { class: "del", key: "del" },
        { class: "number", key: "4" },
        { class: "number", key: "5" },
        { class: "number", key: "6" },
        { class: "operation", key: "+" },
        { class: "number", key: "1" },
        { class: "number", key: "2" },
        { class: "number", key: "3" },
        { class: "operation", key: "-" },
        { class: "number", key: "." },
        { class: "number", key: "0" },
        { class: "operation", key: "÷" },
        { class: "operation", key: "x" },
        { class: "reset", key: "reset" },
        { class: "equal", key: "=" },
    ];

    let [num, setNum] = useState("0");
    let [oldNum, setOldNum] = useState("");
    let [operator, setOperator] = useState("");

    let [fontSize, setFontSize] = useState(3);

    const click = (btn) => {
        let btnClassName = btn.target.className;
        let btnInnerHTML = btn.target.innerHTML;

        if (btnClassName === "number") {
            if (checkEqualOperation) {
                checkEqualOperation = false;
                setNum((num = "0"));
                setOldNum((oldNum = ""));
                setOperator((operator = ""));
                setFontSize((fontSize = 3));
            }
            if (num.length != 16) {
                if (num.length > 7) {
                    setFontSize((fontSize -= 0.1875));
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
        }

        if (btnClassName === "del") {
            if (checkEqualOperation) {
                checkEqualOperation = false;
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
            if (checkEqualOperation || oldNum === "") {
                checkEqualOperation = false;
                setOperator((operator = btnInnerHTML));
                setOldNum((oldNum = num));
                setNum((num = "0"));
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
                setFontSize((fontSize = 3));
            }
        }

        if (btnClassName === "equal") {
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
            checkEqualOperation = true;
        }

        if (btnClassName === "reset") {
            setNum((num = "0"));
            setOldNum((oldNum = ""));
            setOperator((operator = ""));
            setFontSize((fontSize = 3));
        }
    };

    return (
        <div className="calculator">
            <header className="header">
                <h1>Calculator</h1>
            </header>
            <div className={"display"}>
                <div className="oldNumAndOperator">
                    <div>{oldNum}</div>
                    <div>{operator}</div>
                </div>
                <div className="num" style={{ fontSize: `${fontSize}rem` }}>
                    {num}
                </div>
            </div>
            <div className="keyboard">
                {keys.map((props) => (
                    <button className={props.class} onClick={click}>
                        {props.key}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
