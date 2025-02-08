import axios from 'axios';
import { User, Agent } from './types';

const API_URL = 'https://nodeforbackend.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
});

// Users API
export const getUsers = () => api.get<User[]>('/users');
export const createUser = (user: Omit<User, 'id'>) => api.post<User>('/users', user);
export const updateUser = (id: number, user: Partial<User>) => api.put<User>(`/users/${id}`, user);
export const deleteUser = (id: number) => api.delete(`/users/${id}`);

// Agents API
export const getAgents = () => api.get<Agent[]>('/agents');
export const createAgent = (agent: Omit<Agent, 'id'>) => api.post<Agent>('/agents', agent);
export const updateAgent = (id: number, agent: Partial<Agent>) => api.put<Agent>(`/agents/${id}`, agent);
export const deleteAgent = (id: number) => api.delete(`/agents/${id}`);