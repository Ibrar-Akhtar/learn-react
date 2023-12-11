import React from 'react';

const ResponsivePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white py-4 w-full text-center">
        <h1 className="text-2xl font-bold">Responsive Web Page</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 shadow-md rounded-md">
          <p className="text-lg font-semibold mb-4">Welcome to our website!</p>
          <p className="text-gray-700">
            This is a simple responsive web page built with React and Tailwind CSS.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-4 w-full text-center">
        © 2023 Responsive Web Page
      </footer>
    </div>
    
  );
};

export default ResponsivePage;
