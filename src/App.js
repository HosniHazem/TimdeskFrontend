import AuthUser from './Session/AuthUser';
import Guest from './navbar/guest';
import Auth from './navbar/auth';

function App() {
  const {getToken} = AuthUser();
  if(!getToken()){
    return <Guest />
  }
  return (
      <Auth />
  );
}

export default App;
