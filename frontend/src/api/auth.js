import api from './axios';

export const login = async (email, password) => {
  const { data } = await api.post('/login', { email, password });
  localStorage.setItem('token', data.token);
  return data;
};