import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {MyPizza} from '../interface/pizza'

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<MyPizza>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://628f5e0d0e69410599db2da5.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Помилка при отриманні піци!');
        navigate('/pizzarello');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Завантаження...</>;
  }

  return (
    <WrapPizza >
      <img src={pizza.imageUrl} alt="Img" width="300"/>
      <h2>{pizza.title}</h2>
      <Info>{pizza.info}</Info>
      <h4>{pizza.price} грн</h4>
      <Link to="/pizzarello">
        <Button >
          Назад
        </Button>
      </Link>
    </WrapPizza>
  );
};

export default FullPizza;

const WrapPizza = styled.div`
  width:400px;
  margin: 0 auto;
`
const Info = styled.div`
padding-top: ${(p:any)=> p.theme.space[4]}px;
`
const Button = styled.button`
  margin-top: ${(p:any)=> p.theme.space[4]}px;
  font-size: ${(p:any) => p.theme.fontSizes.m};
  color: ${(p:any) => p.theme.colors.textBtn};
  background-color:${(props:any) => props.theme.colors.buttonBC};
  border: none;
  border-radius: ${(props:any) => props.theme.opacities.borderRadius};
  padding-top: ${(p:any)=> p.theme.space[2]}px;
  padding-bottom: ${(p:any)=> p.theme.space[2]}px;
  padding-left: ${(p:any)=> p.theme.space[4]}px;
  padding-right: ${(p:any)=> p.theme.space[4]}px;
  
  &:hover{
    cursor: pointer;
    background-color:${(props:any) => props.theme.colors.buttonBCHover};
  }
`;