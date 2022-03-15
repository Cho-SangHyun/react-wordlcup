import './SelectButton.css';

function SelectButton({item, onSelect}){
    return(
        <button className="SelectButton" onClick={() => {onSelect(item)}}>
            선택하기
        </button>
    )
}

export default SelectButton;