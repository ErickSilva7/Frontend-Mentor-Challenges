import "./index.scss";
import Key from "./keys";

const Keyboard = () => {
    var keys = [
        { type: "number", key: "7" },
        { type: "number", key: "8" },
        { type: "number", key: "9" },
        { type: "del", key: "del" },
        { type: "number", key: "4" },
        { type: "number", key: "5" },
        { type: "number", key: "6" },
        { type: "operation", key: "+" },
        { type: "number", key: "1" },
        { type: "number", key: "2" },
        { type: "number", key: "3" },
        { type: "operation", key: "-" },
        { type: "number", key: "." },
        { type: "number", key: "0" },
        { type: "operation", key: "÷" },
        { type: "operation", key: "x" },
        { type: "reset", key: "reset" },
        { type: "equal", key: "=" },
    ];

    return (
        <div className="calculator__keyboard">
            {keys.map((props) => (
                <Key type={props.type}>{props.key}</Key>
            ))}
        </div>
    );
};

export default Keyboard;
