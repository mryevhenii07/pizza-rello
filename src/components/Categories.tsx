import { useState } from 'react';



const Categories: React.FC = () => {
    const [activeindex, setActiveIndex] = useState(0)

    const categories = ["Вегетаріанська", "М'ясні", "Гриль", "Гострі", "Закриті"]

    const handleClickCategory = (index: number) => {
        setActiveIndex(index)
    }
    return (
        <div className="categories">
            <ul>
                {categories.map((value, index) => <li key={index} onClick={() => handleClickCategory(index)} className={activeindex === index ? "active" : ""}>{value}</li>)}
            </ul>
        </div>
    )
}

export default Categories