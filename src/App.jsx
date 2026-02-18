import { useEffect, useState } from "react"
import Background from "./Components/Background/Background"
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
const App = () => {
    let heroData = [
        {text1:"Dive into", text2:"What you love"},
        {text1:"Indulge", text2:"Your Passions"},
        {text1:"Give in to", text2:"Yours Passion"},

    ]
    const [heroCount,setHeroCount] = useState(0);
    const [playStatus,setPlayStatus] = useState(false);

    useEffect(() => {
      setInterval(() => {
        setHeroCount((count) =>{return count === 2 ? 0 : count + 1});
      } , 3000);
    }, []);


  return (
    <div>
     <Background playStatus = {playStatus} heroCount= {heroCount} />
     <Navbar />
     <Hero 
     heroData = {heroData [heroCount]} 
     setHeroCount = {setHeroCount}
     HeroCount = {heroCount}
     playStatus = {playStatus}  
     setPlayStatus = {setPlayStatus} />
    </div>
  )
}

export default App
