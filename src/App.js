import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider';
import { Home, Login, NotFound, Register } from './pages';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/*" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
