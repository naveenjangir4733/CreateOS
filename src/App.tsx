import { Outlet } from 'react-router';
import Layout from './components/layout/Layout';
import { ActiveTabProvider } from './context';

function App() {
  return (
    <ActiveTabProvider>
      <Layout>
        <Outlet />
      </Layout>
    </ActiveTabProvider>
  );
}

export default App;
