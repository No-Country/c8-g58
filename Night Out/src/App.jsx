import Header from './components/Header';
import Introduction from './components/Home/Introduction/Introduction';
import HowItWorks from './components/Home/HowItWorks/HowItWorks';
import SignIn from './components/Home/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import Publications from './components/Publications/Publications';
import Navbar from './components/Feed/Navbar';
import Filters from './components/Feed/Filters';
import User from './components/User/User';
import Settings from './components/Settings/Settings'

import { AlertsProvider } from './components/alerts/Alerts';
import { AuthContextProvider } from './components/firebase/context/AuthContext'

function App() {
	return (
		<div className="bg-fondo dark:bg-Lfondo">
			<AuthContextProvider>
				<AlertsProvider>
					<Header />
					<Routes>
						<Route
							path="/"
							element={
								<>
									<main className="md:w-10/12 flex flex-col items-center mx-auto s:w-full">
										<Introduction />
										<HowItWorks />
										<SignIn />
									</main>
									<Footer />
								</>
							}
						></Route>
						<Route
							path="/Sign-up"
							element={
								<>
									<main className="md:w-10/12 flex flex-col items-center mx-auto s:w-full">
										<SignUp />
									</main>
									<Footer />
								</>
							}
						></Route>
						<Route
							path="/Sign-In"
							element={
								<>
									<main className="md:w-10/12 flex flex-col items-center mx-auto s:w-full">
										<SignIn />
									</main>
									<Footer />
								</>
							}
						></Route>
						<Route
							path="/Feed"
							element={
								<main className="md:w-3/5 flex flex-col items-center mx-auto relative overflow-hidden s:w-full xl:w-1/2 2xl:w-1/3">
									<Publications />
									<Filters />
									<Navbar />
								</main>
							}
						></Route>
						<Route
							path="/User"
							element={
								<main className="md:w-3/5 flex flex-col items-center mx-auto relative overflow-hidden s:w-full xl:w-1/2 2xl:w-1/3">
									<User />
									<Navbar />
								</main>
							}
						></Route>
						<Route
							path="/*"
							element={
								<>
								<main className="md:w-3/5 flex flex-col items-center mx-auto relative overflow-hidden s:w-full">
									<Settings />
									<Navbar />
								</main>
								<Footer />
								</>
							}
						></Route>
					</Routes>
				</AlertsProvider>
			</AuthContextProvider>
		</div>
	);
}

export default App;
