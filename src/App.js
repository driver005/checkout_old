import './App.css';
import AccountSummaryComponent from './AccountSummary';
import Account from './Account';
import Menu from './components/Menu';

function App() {
    return (
        <>
            <header>
                <Menu />
            </header>
            <main className="px-20 py-10">
                <section className="w-4/6">
                    <Account />
                </section>
                <section className="w-2/6">

                </section>
            </main>
        </>
        
    );
}

export default App;
