import "./display.scss"

const Display = ({ num, oldNum, operator, fontSize }) => {
    return (
        <div className={"display"}>
            <div className="oldNumAndOperator">
                <div>{oldNum}</div>
                <div>{operator}</div>
            </div>
            <div className="num" style={{ fontSize: `${fontSize}rem` }}>
                {num}
            </div>
        </div>
    );
};

export default Display;
