import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Users, UserCog } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-2 py-2 text-gray-900 hover:text-gray-600">
                <h1 className="text-xl font-bold">Management Portal</h1>
              </Link>
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  to="/users"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  <Users className="w-5 h-5 mr-1" />
                  Users
                </Link>
                <Link
                  to="/agents"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  <UserCog className="w-5 h-5 mr-1" />
                  Agents
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}