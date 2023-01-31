import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
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
    <div className="container">
      <img src={pizza.imageUrl} alt="Img"/>
      <h2>{pizza.title}</h2>
      <h3>{pizza.info}</h3>
      <h4>{pizza.price} грн</h4>
      <Link to="/pizzarello">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;

