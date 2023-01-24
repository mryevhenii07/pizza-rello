
interface Props {
    categoryId: number;
    handleClickCategory: (id: number) => void

}

const Categories: React.FC<Props> = ({ categoryId, handleClickCategory }) => {

    const categories = ["Всі", "Вегетаріанська", "М'ясні", "Гриль", "Гострі", "Закриті"]

    return (
        <div className="categories">
            <ul>
                {categories.map((value, index) => <li key={index} onClick={() => handleClickCategory(index)} className={categoryId === index ? "active" : ""}>{value}</li>)}
            </ul>
        </div>
    )
}

export default Categories