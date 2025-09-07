

import React from 'react';

function AdminPanel() {
	return (
		<div className="min-h-screen bg-blue-50 flex flex-col w-full">
			{/* Header with navigation */}
			<header className="bg-blue-700 text-white py-4 px-8 shadow flex items-center justify-between w-full">
				<div className="flex items-center gap-4">
					<span className="text-2xl font-bold tracking-wide">Admin Panel</span>
				</div>
				<nav className="flex gap-6">
					<a href="#dashboard" className="hover:underline font-medium">Dashboard</a>
					<a href="#complaints" className="hover:underline font-medium">Complaints</a>
					<a href="#profile" className="hover:underline font-medium">Profile</a>
					<button className="ml-4 bg-blue-600 hover:bg-blue-800 px-3 py-1 rounded text-white font-semibold transition">Logout</button>
				</nav>
			</header>

					<main className="flex-1 p-8 flex flex-col items-center w-full">
						<div className="bg-white rounded-lg shadow-lg p-6 w-full mb-8" id="dashboard">
					<h2 className="text-xl font-semibold mb-4 text-blue-700">Dashboard</h2>
					<p className="text-gray-700 mb-2">This is your admin dashboard. Here you can manage users, view reports, and perform administrative tasks.</p>
					<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="bg-blue-100 rounded p-4 text-center">
							<h3 className="font-bold text-blue-700">Users</h3>
							<p className="text-2xl font-semibold">--</p>
						</div>
						<div className="bg-blue-100 rounded p-4 text-center">
							<h3 className="font-bold text-blue-700">Reports</h3>
							<p className="text-2xl font-semibold">--</p>
						</div>
					</div>
				</div>
				{/* Complaints Section */}
			<div className="bg-white rounded-lg shadow-lg p-6 w-full mb-8" id="complaints">
					<h2 className="text-xl font-semibold mb-4 text-blue-700">Complaints</h2>
					<p className="text-gray-700">View and manage user complaints here.</p>
					{/* Placeholder for complaints table/list */}
					<div className="mt-4 text-gray-500 italic">No complaints to show.</div>
				</div>
				{/* Profile Section */}
			<div className="bg-white rounded-lg shadow-lg p-6 w-full" id="profile">
					<h2 className="text-xl font-semibold mb-4 text-blue-700">Profile</h2>
					<p className="text-gray-700">View and edit your admin profile here.</p>
					{/* Placeholder for profile info */}
					<div className="mt-4 text-gray-500 italic">Profile details coming soon.</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-blue-700 text-white py-3 px-8 text-center mt-auto w-full">
				<span className="text-sm">&copy; {new Date().getFullYear()} Samadhan Setu Admin Panel. All rights reserved.</span>
			</footer>
		</div>
	);
}

export default AdminPanel;
