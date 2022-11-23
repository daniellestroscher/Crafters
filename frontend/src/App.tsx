import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { Login } from './components/Login/Login';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { NewPost } from './components/NewPost/NewPost';
import { Profile } from './components/Profile/Profile';
import { EditUserProfile } from './components/EditUserProfile/EditUserProfile';
import { DetailsPost } from './components/DetailsPost/DetailsPost';
import { WishList } from './components/WishList/WishList';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className={isAuthenticated ? 'flex' : ''}>
      {isAuthenticated ? <Sidebar /> : null}

      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/create/post" element={<NewPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/update-profile" element={<EditUserProfile />} />
        <Route path="/details-post/:id" element={<DetailsPost />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
