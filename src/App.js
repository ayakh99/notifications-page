import './App.css';
import Notifications from './components/Notifications';
import Attribution from './components/Attribution';
import attribution from './data/attribution';
import { NotificationsContextProvider } from './context/NotificationsContext';

function App() {
  return (
    <NotificationsContextProvider>
      <Notifications />
      <footer>
        <Attribution data={attribution} />
      </footer>
    </NotificationsContextProvider>
  );
}

export default App;
