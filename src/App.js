import { useState } from 'react';
import LoginForm from './componentes/Login/LoginForm';
import HomePage from './componentes/Page/HomePage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return <HomePage />
  }
  return (
    <div>
      <LoginForm onLogin = {() => setLoggedIn(true)} />
    </div>
  );
}

export default App;