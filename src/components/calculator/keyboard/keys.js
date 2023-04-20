import DelKey from "./keys/del key";
import EqualKey from "./keys/equal key";
import NumberKey from "./keys/number keys";
import OperationKey from "./keys/operation keys";
import ResetKey from "./keys/reset key";

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
