import axios from 'axios';
import { requestHeader } from 'shared/utils/requestHeader';
import URL from './constants';

export const fetchAquariums = async () => {
  const result = await axios.get(
    URL.baseApiUrl() + URL.aquarium.getAll,
    requestHeader(),
  );
  return result.data;
};

export const fetchAquariumById = async id => {
  const result = await axios.get(
    URL.baseApiUrl() + URL.aquarium.getAquarium(id),
    requestHeader(),
  );
  return result.data;
};

export const addAquarium = async body => {
  const result = await axios.post(
    URL.baseApiUrl() + URL.aquarium.addAquarium,
    body,
    requestHeader(),
  );
  return result.data;
};

export const deleteAquariumById = async id => {
  const result = await axios.delete(
    URL.baseApiUrl() + URL.aquarium.deleteAquarium(id),
    requestHeader(),
  );
  return result.data;
};

export const updateAquariumById = async (id, body) => {
  const result = await axios.put(
    URL.baseApiUrl() + URL.aquarium.updateAquarium(id),
    body,
    requestHeader(),
  );
  return result.data;
};
