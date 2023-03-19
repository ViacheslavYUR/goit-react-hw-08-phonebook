import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navbar from './modules/Navbar/Navbar';
import UserRoutes from './UserRoutes';

import Loader from 'shared/Loader/Loader';

import { store, persistor } from 'redux/store';
import AuthProvider from 'modules/AuthProvider/AuthProvider';

const App = () => {
  return (
    <Provider store={store} loading={<Loader />}>
      <PersistGate persistor={persistor} loading={<Loader />}>
        <BrowserRouter>
          <AuthProvider>
            <Navbar />
            <UserRoutes />
          </AuthProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
