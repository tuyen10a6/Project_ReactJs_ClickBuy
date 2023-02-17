import Header from "./Header";
import './../../Css/Home.scss'
import Slide_Home from "./Slide_Home";
import CountdownTimer from "../CountdownTimer";
import FlashSaleDay from './FlashSaleDay'

const Home = (props) => {
    return (
        <div className="Home_Page">

            <Header />
            <Slide_Home />
            <FlashSaleDay />


        </div>
    )
}
export default Home;