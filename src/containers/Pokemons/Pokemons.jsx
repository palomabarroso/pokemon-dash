import React, { useState, useEffect } from "react";
import api from "../../utils/services";
import Card from "../../components/Card";

import { Container, WrapperNames } from "./PokemonStyle";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [info, setInfo] = useState([]);
  const params = {
    limit: 20,
  };
  const handleGetPokemon = () => {
    api
      .getPokemonsList(params)
      .then((response) => {
        setPokemons(...pokemons, response.data.results);
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
        setInfo([...info, response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(info);
  return (
    <Container>
      <WrapperNames>
        {pokemons?.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            onClick={() => handleGetInfos(item.name)}
          />
        ))}
      </WrapperNames>
      <div>
        {info?.map((item) => (
          <ul>
            {item.stats?.map((stats) => (
              <li>
                {stats.stat.name} {stats?.base_stat}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Container>
  );
};

export default Pokemons;
