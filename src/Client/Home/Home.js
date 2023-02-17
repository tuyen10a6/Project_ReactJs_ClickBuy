import Header from "./Header";
import './../../Css/Home.scss'
import Slide_Home from "./Slide_Home";
import CountdownTimer from "../CountdownTimer";


const Home = (props) => {
    return (
        <div className="Home_Page">

            <Header />
            <Slide_Home />

            <CountdownTimer />

        </div>


    )
}
export default Home;