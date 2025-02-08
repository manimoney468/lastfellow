import React from 'react';
import { Link } from 'react-router-dom';
import { Users, UserCog } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Management Portal</h1>
        <p className="text-xl text-gray-600 mb-12">
          Manage your users and agents efficiently with our intuitive interface
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            to="/users"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h2 className="text-2xl font-semibold mb-4">Users Management</h2>
            <p className="text-gray-600">
              Add, edit, and manage user accounts with ease
            </p>
          </Link>
          
          <Link
            to="/agents"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <UserCog className="w-12 h-12 mx-auto mb-4 text-green-500" />
            <h2 className="text-2xl font-semibold mb-4">Agents Management</h2>
            <p className="text-gray-600">
              Manage your agents and their departments efficiently
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}