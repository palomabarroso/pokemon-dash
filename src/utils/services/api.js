import axios from "axios";
import { BASE_URL_API, VERSION_API } from "../constants";
import { routes } from "../../utils";
const api = axios.create({
  baseURL: `${BASE_URL_API}/${VERSION_API}`,
});

export const getPokemonsList = async (params) => {
  const response = await api.get(routes.POKEMONS, { params });
  return response;
};

export const getPokemonInfo = async (id) => {
  const response = await api.get(`${routes.POKEMONS}${id}`);
  return response;
};


export const getPokemonStat = async (params) => {
  const response = await api.get(routes.STATS, { params });
  return response;
};

export const getPokemonAbility = async (params) => {
  const response = await api.get(routes.ABILITYS, { params });
  return response;
};
