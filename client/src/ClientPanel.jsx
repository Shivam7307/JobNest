
import React, { useState } from 'react';

const problemOptions = [
	'Potholes',
	'Wire Breakage',
	'Water Leakage',
	'Street Light Issue',
	'Garbage Collection',
	'Other',
];

function ClientPanel() {
	const [problem, setProblem] = useState('');
	const [photo, setPhoto] = useState(null);
	const [location, setLocation] = useState({ lat: '', lng: '' });
	const [status, setStatus] = useState('');

	// Get live location
	const handleGetLocation = () => {
		if (!navigator.geolocation) {
			setStatus('Geolocation is not supported by your browser');
			return;
		}
		setStatus('Getting location...');
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setLocation({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
				setStatus('Location captured!');
			},
			() => {
				setStatus('Unable to retrieve your location');
			}
		);
	};

	const handlePhotoChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setPhoto(e.target.files[0]);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!problem || !photo || !location.lat || !location.lng) {
			setStatus('Please fill all fields, upload a photo, and capture your location.');
			return;
		}
		setStatus('Problem submitted successfully!');
		// TODO: Send data to backend
	};

	return (
		<div className="min-h-screen bg-blue-50 flex flex-col w-full">
			{/* Header */}
			<header className="bg-blue-700 text-white py-4 px-8 shadow flex items-center justify-between w-full">
				<span className="text-2xl font-bold tracking-wide">Client Panel</span>
				<nav className="flex gap-6">
					<a href="#problems" className="hover:underline font-medium">Report Problem</a>
					<a href="#profile" className="hover:underline font-medium">Profile</a>
					<button className="ml-4 bg-blue-600 hover:bg-blue-800 px-3 py-1 rounded text-white font-semibold transition">Logout</button>
				</nav>
			</header>

			<main className="flex-1 p-8 flex flex-col items-center w-full">
				<div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl mb-8" id="problems">
					<h2 className="text-xl font-semibold mb-4 text-blue-700">Report a Problem</h2>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">Select Problem</label>
							<select
								className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
								value={problem}
								onChange={(e) => setProblem(e.target.value)}
								required
							>
								<option value="">-- Select a problem --</option>
								{problemOptions.map((opt) => (
									<option key={opt} value={opt}>{opt}</option>
								))}
							</select>
						</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">Upload Photo</label>
										<div className="flex items-center gap-3">
											<label htmlFor="photo-upload" className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow cursor-pointer transition">
												{/* Camera SVG icon */}
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
													<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75V8.25A2.25 2.25 0 014.5 6h2.379a1.5 1.5 0 001.342-.833l.447-.894A1.5 1.5 0 0110.121 3h3.758a1.5 1.5 0 011.342.773l.447.894A1.5 1.5 0 0017.121 6H19.5a2.25 2.25 0 012.25 2.25v7.5A2.25 2.25 0 0119.5 18h-15a2.25 2.25 0 01-2.25-2.25z" />
													<circle cx="12" cy="13" r="3.25" />
												</svg>
												<input
													id="photo-upload"
													type="file"
													accept="image/*"
													onChange={handlePhotoChange}
													className="hidden"
													capture="environment"
													required
												/>
											</label>
											{photo && <div className="text-green-700 text-sm">{photo.name}</div>}
										</div>
									</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">Live Location</label>
							<div className="flex gap-2 items-center">
								<button
									type="button"
									onClick={handleGetLocation}
									className="py-1 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded shadow"
								>
									Get Location
								</button>
								{location.lat && location.lng && (
									<span className="text-blue-700 text-sm">Lat: {location.lat.toFixed(5)}, Lng: {location.lng.toFixed(5)}</span>
								)}
							</div>
						</div>
						{status && <div className={status.includes('success') ? "text-green-600" : "text-red-500"}>{status}</div>}
						<button
							type="submit"
							className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
						>
							Submit Problem
						</button>
					</form>
				</div>
				{/* Profile Section Placeholder */}
				<div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl" id="profile">
					<h2 className="text-xl font-semibold mb-4 text-blue-700">Profile</h2>
					<div className="text-gray-500 italic">Profile details coming soon.</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-blue-700 text-white py-3 px-8 text-center mt-auto w-full">
				<span className="text-sm">&copy; {new Date().getFullYear()} Samadhan Setu Client Panel. All rights reserved.</span>
			</footer>
		</div>
	);
}

export default ClientPanel;
