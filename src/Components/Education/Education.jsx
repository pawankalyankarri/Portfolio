import './education.css';
import study from '../../assets/study.jpg'
import { School } from '@mui/icons-material';

const Education = () => {
    return(
        <div id='education' className='education'>
           <div className='education-title'>
            <h1><img src={study} alt="" /> My Education</h1>
           </div>
           <div className='info'>
           <div className='details'>
            <h2><School/> SRI VEERA VENKATA SATYA DEV DEGREE COLLEGE, ANNAVARAM</h2>
            <h3>BSc[Computers]</h3>
            <h4>2020 - 2023</h4>
            <h5>6.82 CGPA</h5>
           </div>
           <div className='details'>
            <h2> <School/> SRI NIDHI JR COLLEGE, KATHIPUDI</h2>
            <h3>MPC</h3>
            <h4>2018 - 2020</h4>
            <h5>8.44 CGPA</h5>
           </div>
           <div className='details'>
            <h2> <School/> ZPPH HIGH SCHOOL, CHINTHALURU</h2>
            <h3>SSC</h3>
            <h4>2017 - 2018</h4>
            <h5>9.5 CGPA</h5>
           </div>
           </div>
        </div>
    )
}
export default Education;