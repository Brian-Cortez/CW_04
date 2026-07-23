import HelloWorld from "./HelloWorld.jsx";
import Counter from "./Counter.jsx";
import FilteredList from "./FilteredList.jsx";
import "./App.css";

const produce = [
    { name: "Apple", type: "Fruit" },
    { name: "Banana", type: "Fruit" },
    { name: "Carrot", type: "Vegetable" },
    { name: "Broccoli", type: "Vegetable" },
    { name: "Orange", type: "Fruit" },
    { name: "Spinach", type: "Vegetable" }
];

function App() {
    return (
        <main className="App">
            <HelloWorld />
            <Counter />
            <FilteredList items={produce} />
        </main>
    );
}

export default App;