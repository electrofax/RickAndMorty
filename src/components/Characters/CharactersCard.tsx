import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { type ICharOne } from '../../models/ICharOne';
import HeaderLogo from '../Layout/HeaderLogo';

const { Meta } = Card;

const CharactersCard = () => {
  const [person, setPerson] = useState<ICharOne>();
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack: () => void = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (id !== undefined) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(async (res: Response) => res.json())
        .then((data) => {
          setPerson(data as ICharOne);
        });
    }
  }, [id]);

  return (
    <>
      <HeaderLogo />
      <div className="oneCard">
        <Card
          className="cardList_card"
          key={person?.id}
          style={{ width: 240, margin: 20 }}
          cover={<img alt="example" src={person?.image} />}
        >
          <h3>{person?.id}</h3>
          <Meta title={person?.name} description={person?.gender} />
          <ul>
            <li>{person?.status}</li>
            <li>{person?.species}</li>
            <li>{person?.location.name}</li>
            <li>{person?.origin.name}</li>
          </ul>
        </Card>
      </div>
      <div className="back-button">
        <button type="button" onClick={goBack}>
          Назад
        </button>
      </div>
    </>
  );
};

export default CharactersCard;
