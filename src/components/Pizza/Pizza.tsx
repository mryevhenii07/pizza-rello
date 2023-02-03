import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {addItem} from '../../redux/slices/cartSlice'
import { MyPizza } from '../../interface/pizza';
import {RootState} from '../../redux/store'


const typesName = ["тонке", "традиційне"]

const Pizza: React.FC<MyPizza>  = ({ id, imageUrl, title, price, sizes, types }) => {
    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)

    const dispatch = useDispatch()

    const cartItem = useSelector((state:RootState) => state.cart.items.find((obj:any) => obj.id === id))
    const addedCount = cartItem?.count ? cartItem.count : 0

    const handleTotal =()=>{

    const item ={
        id,
        title,
        price,
        imageUrl,
        type:typesName[activeType],
        size:sizes[activeSize]
    }
    dispatch(addItem(item))
    }
    
    return (
        <Wrap >
            <PizzBlock >
                <Link to={`/pizza/${id}`}>
            <Image
                src={imageUrl}
                alt="Pizza"
            />
            </Link>
            <PizzaBlockTitle >{title}</PizzaBlockTitle>
            <Selector  >
                <UlEl>
                    {types.map((type, index) => <LiEl onClick={() => setActiveType(index)} key={type} className={activeType === index ? "active" : ""}>{typesName[type]}</LiEl>)}
                </UlEl>
                <UlEl>
                    {sizes.map((size, index) => <LiEl onClick={() => setActiveSize(index)} key={size} className={activeSize === index ? "active" : ""}>{size} см.</LiEl>)}
                </UlEl>
            </Selector>
            <Bottom >
                <Price >від {price} грн</Price>
                <button onClick={handleTotal} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span >Додати</span>
                    {addedCount > 0 &&  <i>{addedCount}</i>}
                </button>
            </Bottom>
        </PizzBlock></Wrap>
    )
}

export default Pizza
const Wrap = styled.div`
    display: flex;
    justify-content: center;
`
const PizzBlock = styled.div`
    width: 280px;
    text-align: center;
    margin-bottom: 65px;
`
const Selector = styled.div`
    display: flex;
    background-color: #f3f3f3;
    border-radius: 10px;
    flex-direction: column;
    padding: 6px;
`

const PizzaBlockTitle = styled.h4`
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 1%;
    margin-bottom: 20px;
`
const Price = styled.div`
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.015em;
`
const Image = styled.img`
    width: 260px;
`
const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`
const UlEl = styled.ul`
    display: flex;
    flex: 1;

    &:first-of-type {
        margin-bottom: 6px;
    }
`
const LiEl = styled.li`
        padding: 8px;
        flex: 1;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        @include noselect();
        &.active {
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        border-radius: 5px;
        cursor: auto;
    }
`

