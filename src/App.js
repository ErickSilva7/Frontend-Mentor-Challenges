import "./App.scss";
import Header from "./components/header";
import Calculator from "./components/calculator";

const App = () => {
    return (
        <div className="calculator">
            <Header />
            <Calculator />
        </div>
    );
};

export default App;
