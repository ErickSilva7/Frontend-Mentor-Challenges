import "./display.scss";

const Display = (props) => {
    return <p className="calculator__display">{props.children}</p>;
};

export default Display;
