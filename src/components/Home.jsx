import header from '../assets/header-image2.jpg'
import f1 from '../assets/food1.jpg'
import f2 from '../assets/food2.jpg'
import f3 from '../assets/food3.jpg'
import f5 from '../assets/food-menu1.jpg'
import f6 from '../assets/food-menu2.jpg'
import f7 from '../assets/food-menu3.jpg'
import f8 from '../assets/food-menu4.jpg'
import f9 from '../assets/food-menu5.jpg'
import f10 from '../assets/food-menu6.jpg'
import { useNavigate } from 'react-router-dom'

function Home()
{
    const navigate = useNavigate()
    
    
    return (
        <div className="home">
            <h1>Welcome Everyone To Nutrition Tracker</h1>
            <img className='header-img' src={header} alt="" />
            <h2>Types Of food</h2>
            <div className="foods">
                <div className="food1">
                    <img src={f5} alt="" />
                    <img src={f6} alt="" />
                    <img src={f7} alt="" />
                </div>
                <div className="food2">
                <img src={f8} alt="" />
                <img src={f9} alt="" />
                <img src={f10} alt="" />
                </div>
            </div>
            <div className="img-content">
                <div className="btn1">
                <img src={f1} alt="" />
                <button onClick={()=>{
                    navigate("/about")
                    
                }}>More</button>
                </div>
                <div onClick={()=>{
                    navigate('/about')
                }} className="btn2">
                <img src={f2} alt="" />
                <button onClick={()=>{
                    navigate('/about')
                }}>More</button>
                </div>
                <div className="btn3">
                <img src={f3} alt="" />
                <button>More</button>
                </div>
                

            </div>
            <footer className='footer'>
           

            </footer>
        </div>
    )
}

export default Home;