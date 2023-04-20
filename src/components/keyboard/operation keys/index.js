import "../../../scss/keys.scss";

const OperationKey = (props) => {
    return (
        <button className="Number__and__operation__key">
            {props.children}
        </button>
    );
};

export default OperationKey;
