import { useState } from "react";
import "./index.scss";

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

    const [num, setNum] = useState("");
    let [fontSize, setFontSize] = useState(3);

    const click = (btn) => {
        let btnClassName = btn.target.className;
        let btnInnerHTML = btn.target.innerHTML;

        if (btnClassName === "number") {
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
            setNum(num.slice(0, -1));
            if (num.length > 8) {
                setFontSize((fontSize += 0.1875));
            }
        }

        if (btnClassName === "operation") {
            console.log(btnInnerHTML);
        }
    };

    return (
        <div>
            <div className={"display"} style={{ fontSize: `${fontSize}rem` }}>
                {num}
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
