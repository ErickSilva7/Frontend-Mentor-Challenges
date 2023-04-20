import "../keys.scss";

const NumberKey = (props) => {
    return (
        <button className="Number__and__operation__key">
            {props.children}
        </button>
    );
};

export default NumberKey;
