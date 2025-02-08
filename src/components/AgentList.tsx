import React, { useState, useEffect } from 'react';
import { Pencil, Trash2, Plus, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { Agent } from '../types';
import * as api from '../api';

export default function AgentList() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingAgent, setEditingAgent] = useState<Agent | null>(null);
  const [formData, setFormData] = useState({ name: '', department: '' });

  useEffect(() => {
    loadAgents();
  }, []);

  const loadAgents = async () => {
    try {
      const response = await api.getAgents();
      setAgents(response.data);
    } catch (error) {
      toast.error('Failed to load agents');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingAgent) {
        await api.updateAgent(editingAgent.id, formData);
        toast.success('Agent updated successfully');
      } else {
        await api.createAgent(formData);
        toast.success('Agent created successfully');
      }
      setEditingAgent(null);
      setFormData({ name: '', department: '' });
      loadAgents();
    } catch (error) {
      toast.error(editingAgent ? 'Failed to update agent' : 'Failed to create agent');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this agent?')) return;
    try {
      await api.deleteAgent(id);
      toast.success('Agent deleted successfully');
      loadAgents();
    } catch (error) {
      toast.error('Failed to delete agent');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Agents Management</h2>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border rounded p-2"
            required
          />
          <input
            type="text"
            placeholder="Department"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            className="border rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          {editingAgent ? 'Update Agent' : 'Add Agent'}
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {agents.map((agent) => (
              <tr key={agent.id}>
                <td className="px-6 py-4 whitespace-nowrap">{agent.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{agent.department}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => {
                      setEditingAgent(agent);
                      setFormData({ name: agent.name, department: agent.department });
                    }}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(agent.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}