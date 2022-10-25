import React from "react"
import "./Home.css"
import hero from "../pic/hero1.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import find1 from "../pic/find1.png"
import gh from "../pic/gh.png"
import twtr from "../pic/twitter.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME</h3>
            <h1>
              Hi, I’m <span>Arpan Ojha</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Graduate Student."," Data analyst."," Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p></p>
          
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>I am looking for full-time positions in Data science, Analytics and software engineering</h4>
                <h4>FIND ME</h4>
                <div className='button'>
                  <button className='btn_shadow' onClick="window.location.href='https://twitter.com/ojhaarpan18';">
                    {/* <i class='fab fa-facebook-f'></i> */}
                    <img src={twtr} alt='' />
                  </button> 
                  <button className='btn_shadow' onClick="window.location.href='https://www.linkedin.com/in/arpan-96/';">
                    <i class='fab fa-linkedin-in'></i>
                    <img src={find1} alt='' />
                  </button>
                  <button className='btn_shadow' onClick="window.location.href='https://github.com/arpanojha';">
                    <i class='fab fa-linkedin-in'></i>
                    <img src={gh} alt='' />
                  </button>
                </div>
              </div>
              {/* <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div> */}
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
