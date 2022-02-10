function DessertItem({item}){
    return(
        <div>
            <h3>{item.name}</h3>
            <img src={item.imgUrl} alt="디저트 사진" />
        </div>
    )
}

export default DessertItem;