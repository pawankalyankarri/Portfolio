import './footer.css';
import red from '../../assets/red.png'
import white from '../../assets/white.png'
const Footer = () => {
    return(
        <div id='footer' className='footer'>
            <img src={red} alt="" width={'150px'} />
            <img src={white} alt="" width={'150px'} />
              
        </div>
    )
}
export default Footer;