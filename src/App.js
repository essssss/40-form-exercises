import logo from "./logo.svg";
import "./App.css";
import BoxList from "./BoxList";
import TodoList from "./TodoList";

function App() {
    return (
        <div className="App">
            <TodoList />
            <br />
            <BoxList />
        </div>
    );
}

export default App;
