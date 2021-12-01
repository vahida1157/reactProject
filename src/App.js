import Button from './components/Button'
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0)

    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1);

    return (
        <div className="App">
            <h1 align={'center'}>{counter}</h1>
            <div align={'center'}>
                <Button text='-' onClick={decrease}/>
                <Button text='+' onClick={increase}/>
            </div>
        </div>
    );
}

export default App;
