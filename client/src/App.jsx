import ClientPanel from './ClientPanel';
import React, { useState } from 'react';
import AdminLogin from './login/AdminLogin';
import ClientLogin from './login/ClientLogin';



function App() {
  const [loginType, setLoginType] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 font-sans">
      {!loginType && (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Select Login Type</h2>
          <button
            className="w-full py-2 px-4 mb-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setLoginType('admin')}
          >
            Admin Login
          </button>
          <button
            className="w-full py-2 px-4 mb-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => setLoginType('client')}
          >
            Client Login
          </button>
          <button
            className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-200"
            onClick={() => setLoginType('guest')}
          >
            Continue without login
          </button>
        </div>
      )}
      {loginType === 'admin' && <AdminLogin />}
      {loginType === 'client' && <ClientLogin />}
      {loginType === 'guest' && <ClientPanel />}
    </div>
  );
}

export default App;