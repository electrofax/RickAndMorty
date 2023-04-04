import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Input } from 'antd';
import './CharactersList.scss';
import { type ICharacter } from '../../models/ICharacter';

const { Meta } = Card;

async function getAllPerson(name: string, status: string) {
  return fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`
  )
    .then(async (res: Response) => res.json())
    .then((data) => data as ICharacter);
}

interface IStatus {
  lives: string;
}

const CharactersList = (props: IStatus) => {
  const [person, setPerson] = useState<ICharacter>();
  const [name, setName] = useState('');
  const { lives } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setName(newValue);
  };

  useEffect(() => {
    getAllPerson(name, lives).then((data: ICharacter) => {
      setPerson(data);
    });
  }, [name, lives]);

  const navigate = useNavigate();

  return (
    <div className="cardList">
      <Input
        placeholder="Поиск"
        type="text"
        value={name}
        onChange={handleInputChange}
      />
      {person?.results != null ? (
        person?.results?.map((el) => (
          <Card
            onClick={() => {
              navigate(`/${el.id}`);
            }}
            className="cardList_card"
            key={el.id}
            style={{ width: 240, margin: 20 }}
            cover={<img alt="example" src={el.image} />}
          >
            <h3>{el.id}</h3>
            <Meta title={el.name} description={el.gender} />
          </Card>
        ))
      ) : (
        <h2>Ничего не найдено</h2>
      )}
    </div>
  );
};

export default CharactersList;
