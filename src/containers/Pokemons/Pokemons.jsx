import React, { useState, useEffect } from "react";
import api from "../../utils/services";
import Label from "../../components/Label";
import { Container, WrapperNames, Card } from "./PokemonStyle";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [info, setInfo] = useState(null);
  const params = {
    limit: 20,
  };

  const handleGetPokemon = () => {
    api
      .getPokemonsList(params)
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleGetPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetInfos = (id) => {
    api
      .getPokemonInfo(id)
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <WrapperNames>
        {pokemons?.map((item) => (
          <Label
            key={item?.name}
            name={item?.name}
            onClick={() => handleGetInfos(item?.name)}
          />
        ))}
      </WrapperNames>
      {info && (
        <Card>
          <img src={info?.sprites?.front_default} alt="" />
          <span> {info?.name} </span>
          <ul>
            {info?.stats?.map((stats) => (
              <li>
                {stats?.stat?.name} {stats?.base_stat}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </Container>
  );
};

export default Pokemons;
