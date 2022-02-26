function SelectButton({item, onSelect}){
    return(
        <button onClick={() => {onSelect(item)}}>
            선택하기
        </button>
    )
}

export default SelectButton;