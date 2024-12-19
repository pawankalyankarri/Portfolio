import './home.css'
import profile from '../../assets/profile.jpg'
import resume from '../../../public/resume.pdf'
const Home = () => {
    function openResume(){
        window.open(resume)
    }
   
       const whatsappLink = 'https://wa.me/7658946235?text=Hi Kalyan I like your Portfolio'
    
    return(
        <div  id='home' className='home'>
            <img src={profile} alt="profile" />
            <h1>I'm<span>  UI Developer </span></h1>
            <p>Good Knowledge on Front-end development with a passion for building responsive and user-friendly web aplications.</p>
            <div className="home-action">
                <div type='button'  className="home-connect"><a href={whatsappLink} target='_blank' rel="noopener noreferrer" >Hire me</a></div >
                <button   type='button' formTarget='_blank' onClick={openResume} className="home-resume">My resume</button >
            </div>
            {/* <div className=''>
                <ul>
                    <li><a href="" ></a></li>
                </ul>
            </div>*/}
        </div> 
    )
}
export default Home;