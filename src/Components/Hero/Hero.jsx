import './Hero.css';
import arrow_btn from '../../Assets/arrow_btn.png';
import pause_iocn from '../../Assets/pause_icon.png';
import play_icon from '../../Assets/play_icon.png';
const Hero = ({heroData, setHeroCount, HeroCount, playStatus, setPlayStatus}) => {
  return (
    <div className="hero">
        <div className="hero-text">
          <p>{heroData.text1} </p>
          <p>{heroData.text2}</p>
        </div>
        <div className="hero-explore">
          <p>Explore the Features</p>
          <img src={arrow_btn} alt="Arrow Button" />
        </div>
        <div className="hero-dot-play">
          <ul className="hero-dots">
            <li onClick={() => setHeroCount(0)} className={HeroCount === 0 ?"hero-dot orange":"hero-dot"}></li>
            <li onClick={() => setHeroCount(1)} className={HeroCount === 1 ?"hero-dot orange":"hero-dot"}></li>
            <li onClick={() => setHeroCount(2)} className={HeroCount === 2 ?"hero-dot orange":"hero-dot"}></li>
          </ul>
        
        <div className="hero-play">
          <img src={playStatus ? pause_iocn : play_icon} alt="Play/Pause Icon" onClick={() => setPlayStatus(!playStatus)} />
          <p>See the Vedio</p>
        </div>
        </div>
    </div>
  )
}

export default Hero;
