import './App.css';
import AboutUs from './pages/aboutUs/aboutUs';
import UsersPage from './pages/usersPage/usersPage';

function App() {
    const product = {
        name: "IT-Academy",
        address: "Максима Горького 18",
        number: "+996558153587"
    }

    return (
        <div className="container">
            App js
            <UsersPage/>
            <AboutUs text="There You can show information about our company" product={product}/>
        </div>
);
}

export default App;