import './DessertItem.css';

function DessertItem({onSelect, item}){
    return(
        <div className="DessertItem">
            <h3>{item.name}</h3>
            <img src={item.imgUrl} alt="디저트 사진" />
            <button onClick={onSelect}>선택하기</button>
        </div>
    )
}

export default DessertItem;