import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Signin, Profile, Error404} from './pages/index';

const companyName = "MONISA"

export const useUpdatePageTitle = (pageTitle) => {
  useEffect(() => {
    document.title = `${companyName} | ${pageTitle}`
  }, [pageTitle])
}

const App = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default App