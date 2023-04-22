import { useState } from "react";
import "./calculator.scss";

let equalOperation = false;
let clickInOperationKey = false;

const Calculator = () => {
    var keys = [
        { class: "number", key: "7" },
        { class: "number", key: "8" },
        { class: "number", key: "9" },
        { class: "del", key: "Del" },
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
        { class: "reset", key: "Reset" },
        { class: "equal", key: "=" },
    ];

    let [theme, setTheme] = useState(1);

    const themeSwitch = () => {
        if ((theme === 3)) {
            setTheme((theme = 1));
        } else {
            setTheme((theme += 1));
        }
        if (theme === 1) {
            document.body.style.backgroundColor = '#1f1f1f';
        }
        if (theme === 2) {
            document.body.style.backgroundColor = '#fff';
        }
        if (theme === 3) {
            document.body.style.backgroundColor = '#0a0213';
        }
    };

    let [num, setNum] = useState("0");
    let [oldNum, setOldNum] = useState("");
    let [operator, setOperator] = useState("");

    let [fontSize, setFontSize] = useState(3);

    const keyClick = (key) => {
        let btnClassName = key.target.className;
        let btnInnerHTML = key.target.innerHTML;

        if (btnClassName === "number") {
            if (equalOperation) {
                equalOperation = false;
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
            if (equalOperation) {
                equalOperation = false;
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
            if (equalOperation || oldNum === "") {
                equalOperation = false;
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
            if (equalOperation || oldNum === "") {
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
                equalOperation = true;
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
        <div className={`calculator theme${theme}`}>
            <header>
                <h1>Calculator</h1>
                <div className="Theme__Switch">
                    <h2>Theme</h2>
                    <button className="Switch" onClick={themeSwitch}>
                        <div className={`dot position${theme}`}></div>
                    </button>
                </div>
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
                    <button className={props.class} onClick={keyClick}>
                        {props.key}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
