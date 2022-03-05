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
    // 현재 라운드에 대한 state
    const [roundOf, setRoundOf] = useState(16)

    const selectDessert = (item) => {
        setSelectedList([...selectedList, item]);
        let nextSelectIndex = selectIndex + 2;
        setSelectIndex(nextSelectIndex);
    };

    useEffect(() => {
        if (selectIndex === roundOf){
            setDessertList(selectedList);
            setSelectedList([]);
            setSelectIndex(0);
            // parseInt : 몫만 취해준다.(소수점 밑 버리고 정수형 값만 취함)
            setRoundOf(parseInt(roundOf / 2));
        } 
    }, [selectIndex]);

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

    if(roundOf === 1){
        return(
            <div>
                <h1>WINNER</h1>
                {dessertList[selectIndex]}
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>{roundOf}강</h1>
                <div className="select-zone">
                    {dessertList[selectIndex]}
                    <SelectButton item={dessertList[selectIndex]} onSelect={selectDessert}/>
                    {dessertList[selectIndex + 1]}
                    <SelectButton item={dessertList[selectIndex + 1]} onSelect={selectDessert}/>
                </div>
            </div>
        )
    }
    
}

export default App;