import { Outlet } from 'react-router';
import Layout from './components/layout/Layout';
import { AppProviders } from './context/AppProviders';

function App() {
  return (
    <AppProviders>
      <Layout>
        <Outlet />
      </Layout>
    </AppProviders>
  );
}

export default App;
