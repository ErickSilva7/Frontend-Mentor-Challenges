import React, { createContext, useState } from "react";

export const CalculatorContext = createContext();

let checkEqualOperation = false;

export function CalculatorProvider({ children }) {
  const [num, setNum] = useState("0");
  const [oldNum, setOldNum] = useState("");
  const [operator, setOperator] = useState("");

  const keyClick = (key) => {
    const KeyType = key.target.id;
    const KeyValue = key.target.innerHTML;
    let result;

    if (KeyType === "number") {
      if (num === "infinity") {
        setNum("0");
      }
      if (checkEqualOperation) {
        checkEqualOperation = false;
        setOldNum("");
        setOperator("");
      }

      if (KeyValue === "π") {
        setNum(Math.PI);
      } else if (KeyValue === ".") {
        if (num === "") {
          setNum(`${num}`);
        } else if (num.toString().includes(".")) {
          setNum(`${num}`);
        } else {
          setNum(num + KeyValue);
        }
      } else if (num === "0") {
        setNum(KeyValue);
      } else if (num.toString().length < 15) {
        setNum(parseFloat(num + KeyValue));
      }
    }

    if (KeyType === "del") {
      if (checkEqualOperation) {
        checkEqualOperation = false;
        setNum("0");
        setOldNum("");
        setOperator("");
      }

      if (num !== "0" && num.toString().length !== 1) {
        setNum(num.toString().slice(0, -1));
        setNum(parseFloat(num + KeyValue));
      } else {
        setNum("0");
      }
    }

    if (KeyType === "Operation") {
      if (checkEqualOperation || oldNum === "") {
        setOperator(KeyValue);
        setOldNum(num);
        setNum("0");
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
        if (!result) {
          setNum("undefined");
          setOldNum("");
          setOperator("");
        } else {
          setOldNum(result);
          setNum("0");
          setOperator(KeyValue);
        }
      }
    }

    if (KeyType === "equal") {
      if (checkEqualOperation === false) {
        checkEqualOperation = true;
        if (oldNum !== "") {
          if (operator === "+") {
            setOldNum(`${oldNum} + ${num} =`);
            result = parseFloat(oldNum) + parseFloat(num);
          } else if (operator === "-") {
            setOldNum(`${oldNum} - ${num} =`);
            result = parseFloat(oldNum) - parseFloat(num);
          } else if (operator === "x") {
            setOldNum(`${oldNum} x ${num} =`);
            result = parseFloat(oldNum) * parseFloat(num);
          } else if (operator === "÷") {
            setOldNum(`${oldNum} ÷ ${num} =`);
            result = parseFloat(oldNum) / parseFloat(num);
          } else {
            setOldNum(`${oldNum} ^ ${num} =`);
            result = parseFloat(oldNum) ** parseFloat(num);
          }
          setNum(result);
          setOperator("");
        }
      }
    }

    if (KeyType === "reset") {
      setNum("0");
      setOldNum("");
      setOperator("");
    }

    if (KeyType === "changeTypeNumber") {
      if (checkEqualOperation) {
        checkEqualOperation = false;
        setOldNum("");
        setOperator("");
      }
      setNum(num * -1);
    }

    if (KeyType === "percentage") {
      if (checkEqualOperation) {
        checkEqualOperation = false;
        setOldNum("");
        setOperator("");
      }
      setNum(num / 100);
    }

    if (KeyType === "factorial") {
      if (num.toString().indexOf(".") === -1) {
        if (num.toString().length <= 2) {
          if (!/\./.test(num)) {
            setOldNum(`${num}! =`);
            setOperator("");
            if (num === "0") {
              setNum(1);
            } else {
              let factorial = num;
              for (let i = factorial - 1; i >= 1; i--) {
                factorial *= i;
              }
              setNum(factorial);
            }
          }
        } else {
          setOldNum(`${num}! =`);
          setNum("infinity");
        }
        checkEqualOperation = true;
      }
    }

    if (KeyType === "square-root") {
      result = num ** 0.5;
      if (result) {
        setOldNum(`√${num} =`);
        setNum(result);
        setOperator("");
        checkEqualOperation = true;
      }
    }
  };

  return (
    <CalculatorContext.Provider
      value={{
        num,
        oldNum,
        operator,
        keyClick,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}
