import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';
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
            <div className="App">
                <HelloWorld />
                 <Counter /> 
                <FilteredList items={produce} /> 
            </div>
        );
    
}

export default App;