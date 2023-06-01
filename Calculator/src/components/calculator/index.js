import { useState } from "react";
import "./calculator.scss";
import Header from "./header";
import Display from "./display";
import Keyboard from "./keyboard";

const Calculator = () => {
    let [num, setNum] = useState("0");
    let [oldNum, setOldNum] = useState("");
    let [operator, setOperator] = useState("");
    let [theme, setTheme] = useState(1);

    return (
        <div className={`calculator theme${theme}`}>
            <Header theme={theme} setTheme={setTheme} />
            <Display num={num} oldNum={oldNum} operator={operator} />
            <Keyboard
                num={num}
                setNum={setNum}
                oldNum={oldNum}
                setOldNum={setOldNum}
                operator={operator}
                setOperator={setOperator}
            />
        </div>
    );
};

export default Calculator;
