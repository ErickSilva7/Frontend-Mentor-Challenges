import "./display.scss";

const Display = ({ num, oldNum, operator }) => {
    return (
        <div className="display" id="display">
            <div className="oldNumAndOperator">
                <div>{oldNum}</div>
                <div>{operator}</div>
            </div>
            <div className="num">{num}</div>
        </div>
    );
};

export default Display;
