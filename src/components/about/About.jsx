import './About.css';
import Skills from './skills';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
        </div>

        <div className='about-sections'>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am a dedicated B.Tech student specializing in Computer Science at ABES Engineering College, with a strong focus on full-stack development using the MERN stack. I've developed dynamic, responsive web applications and enjoy building intuitive user experiences.</p>
                    <p>I am passionate about problem-solving and have a solid foundation in various programming languages and technologies. I've won multiple hackathons and earned certifications from Amazon, Infosys, and HackerRank, showcasing my proficiency in cloud computing, algorithms, and programming.</p>
                </div>

                

                <div id='skills' className='about-skills'>
                    <h1>Skill Set</h1>
                    <Skills/>
                </div>
            </div>
        </div>

        <div className='about-achievements'>
            <div className='acheivement'>
                <h1>Winner of</h1>
                <p>INNCODEATHON 2024</p>
            </div>

            <hr></hr>

            <div className='acheivement'>
                <h1>Winner of</h1>
                <p>Smart India Hackathon Internal 2023</p>
            </div>

            <hr></hr>

            <div className='acheivement'>
                <h1>300+</h1>
                <p>Coding Question Solved</p>
            </div>

            <hr></hr>

            <div className='acheivement'>
                <h1>Member of</h1>
                <p>CCPD/SCC Department 2023-24</p>
            </div>
        </div>
    </div>
  )
}
export default About;