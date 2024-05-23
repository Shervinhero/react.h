import './App.css';
import Card from './Card/Card.jsx';
import Chip from './Chip/Chip.jsx';
import LandingPage from './LandingPage.jsx';
import logo from '../public/img.png';
function CardComponent(props) {
    return (
        <article>
            <h3>{props.headline}</h3>
            jsx is strange because {props.reason}
        </article>
    );
}

function ChipComponent({ children }) {
    return <em>{children.toUpperCase()}</em>;
}

const myReason = 'whatever';

function App() {
    return (
        <div>
            <landingpage />
            <h1>Hello world</h1>
            <Chip color={'green'}>My chip</Chip>
            <Card reason={myReason} headline={'My card'} />
        </div>
    );
}

export default App;
