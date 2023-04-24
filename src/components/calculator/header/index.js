import "./header.scss"

const Header = ({ theme, setTheme }) => {
    const themeSwitch = () => {
        if (theme === 3) {
            setTheme((theme = 1));
        } else {
            setTheme((theme += 1));
        }
        if (theme === 1) {
            document.body.style.backgroundColor = "#252d41";
        }
        if (theme === 2) {
            document.body.style.backgroundColor = "#fff";
        }
        if (theme === 3) {
            document.body.style.backgroundColor = "#0a0213";
        }
    };

    return (
        <header>
            <h1>Calculator</h1>
            <div className="Theme__Switch">
                <h2>Theme</h2>
                <button className="Switch" onClick={themeSwitch}>
                    <div className={`dot position${theme}`}></div>
                </button>
            </div>
        </header>
    );
};

export default Header;
