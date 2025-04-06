import { ReactComponent as Sun } from "../images/Sun.svg";
import { ReactComponent as Moon } from "../images/Moon.svg";


const LightDarkModeToogle = () => {
    return(
        <div className="main-div">
            <div className="toogle">
            <input className='dark_mode_input' type='checkbox' id='darkmode-toggle' />
            </div>
        </div>
    )
}

export default LightDarkModeToogle