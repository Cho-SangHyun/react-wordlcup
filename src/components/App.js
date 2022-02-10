import mock from "../mock.json";
import DessertItem from "./DessertItem";

function App(){
    console.log(mock);
    return(
        <div>
            {mock.map((dessert) => {
                return(
                    <li key={dessert.id}>
                        <DessertItem item={dessert}/>
                    </li>
                )
            })}
        </div>
    )
}

export default App;