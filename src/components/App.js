import { useEffect, useState } from "react";
import mock from "../mock.json";
import DessertItem from "./DessertItem";
import './App.css';
import SelectButton from "./SelectButton";

// 피셔 - 예이츠 셔플(배열 섞는 알고리즘)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        // destructuring 문법
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function App(){
    // 디저트들이 JSX형태로 담긴 배열
    const [dessertList, setDessertList] = useState([])
    // dessertList를 순회하는 인덱스 역할
    const [selectIndex, setSelectIndex] = useState(0);
    // 사용자로부터 선택된 디저트들이 담기는 배열
    const [selectedList, setSelectedList] = useState([]);

    const selectDessert = (item) => {
        setSelectedList([...selectedList, item]);
        let nextSelectIndex = selectIndex + 2;
        setSelectIndex(nextSelectIndex);
    };

    useEffect(() => {
        shuffle(mock);

        const dessert_list = mock.map((dessert) => {
            return(
                <li key={dessert.id}>
                    <DessertItem item={dessert}/>
                </li>
            )
        })
        
        setDessertList(dessert_list);
    }, []);

    return(
        <div>
            <div className="select-zone">
                {dessertList[selectIndex]}
                <SelectButton item={dessertList[selectIndex]} onSelect={selectDessert}/>
                {dessertList[selectIndex + 1]}
                <SelectButton item={dessertList[selectIndex + 1]} onSelect={selectDessert}/>
                <hr />
                {selectedList}
            </div>
        </div>
    )
}

export default App;