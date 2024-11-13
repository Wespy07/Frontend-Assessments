import './App.css'
import LoginPage from './components/login/LoginPage'

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { app } from './firebase'
import { useEffect, useState } from 'react'
import Homepage from './components/homepage/Homepage'

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  if (user === null) {
    return (
      < LoginPage />
    )
  } else {
    return (
      < Homepage user={user} />
    )
  }
}
export default App
