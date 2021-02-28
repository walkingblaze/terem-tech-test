import './App.scss';
import Page from './components/Page/Page';
import PageLayout from './components/PageLayout/PageLayout';

function App() {
  return (
    <div className="App">
      <PageLayout>
        <Page />
      </PageLayout>
    </div>
  );
}

export default App;
