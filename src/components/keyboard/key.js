import DelKey from "./del key";
import EqualKey from "./equal key";
import NumberKey from "./number keys";
import OperationKey from "./operation keys";
import ResetKey from "./reset key";

const Key = (props) => {
    if (props.type === "number") {
        return <NumberKey>{props.children}</NumberKey>;
    }
    if (props.type === "del") {
        return <DelKey>{props.children}</DelKey>;
    }
    if (props.type === "operation") {
        return <OperationKey>{props.children}</OperationKey>;
    }
    if (props.type === "reset") {
        return <ResetKey>{props.children}</ResetKey>;
    }
    if (props.type === "equal") {
        return <EqualKey>{props.children}</EqualKey>;
    }
};

export default Key;
