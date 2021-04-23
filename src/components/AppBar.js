import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';

const styles = {
  header: {
    width: 1000,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'space-between',
    background: 'transparent',
    border: 0,
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </header>
  )
 
}
