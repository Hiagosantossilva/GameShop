import React, { useEffect, useState } from "react";
import styled from "styled-components";
const CatalogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
    gap: 20px;
  padding: 20px;
`;

const GameCard = styled.div`
  background-color: #03282F;
  border-radius: 8px;
  padding: 20px;
  width: 200px;
  height: 270px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;



const GameTitle = styled.h3`
  font-size: 1.0rem;
  color: white;
  text-align: left;

`;

const GameComprar = styled.p`
  background-color: #00FF7A;
  padding: 15px;
  border-radius: 7px;
`;

const GameValor = styled.p`
  color: white;
  text-align: left;
`;


const CatalogoGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () =>{
      try{
        const response = await fetch('http://localhost:8000/games');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Erro ao buscar jogos:', error);
      }

    };
  fetchGames();

  }, []);
  return (
    <CatalogoContainer>
      {games.map((game) => (
        
        <GameCard key={game.id}>
          <img src={game.capa} alt={game.nome} style={{ width: "200px", height: '120px' }} />
          <GameTitle>{game.nome}</GameTitle>
          <GameValor>R$ {game.valor}</GameValor>
          <GameComprar>Comprar</GameComprar>
        </GameCard>
      ))}
    </CatalogoContainer>
  )

}

export default CatalogoGames;