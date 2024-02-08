// Example from https://beta.reactjs.org/learn
import { useState } from 'react';
import styles from './counters.module.css';
function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (React.createElement("div", null,
        React.createElement("button", { onClick: handleClick, className: styles.counter },
            "Clicked ",
            count,
            " times")));
}
export default function MyApp() {
    return React.createElement(MyButton, null);
}
//# sourceMappingURL=counters.js.map