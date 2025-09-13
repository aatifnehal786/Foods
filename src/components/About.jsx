import a1 from '../assets/male-photo1.jpg'
import a2 from '../assets/male-photo2.jpg'
import a3 from '../assets/male-photo3.jpg'
import about from '../assets/about-photo.jpg'


function About() {
    return (
        <div className="about">
            <h1>ABOUT US</h1>

            <div className="about-img1">
                <div className="about-content1">
                    <h3>Hello</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eaque?Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Vel facilis cupiditate dignissimos repellat quaerat deserunt cumque at blanditiis? Placeat
                        voluptatum quo expedita eius nemo, tempora quidem veritatis eos facere ut animi enim atque qui cumque voluptates, similique
                        tempore dolor a et explicabo vero tenetur nesciunt eveniet. Quaerat id soluta sequi! Lorem ipsum dolor, sit amet consectetur
                         adipisicing elit. Corporis recusandae quia quasi veniam ipsum ex ea sint, velit consequuntur magnam incidunt illo eveniet temporibus 
                        consectetur quo, tempore iusto? Illum expedita veritatis itaque ipsam consequuntur laudantium iste commodi voluptas blanditiis 
                        quidem quaerat provident repellendus voluptatem beatae voluptate, alias eveniet. Maxime minus quidem, voluptatibus dolore temporibus
                         hic inventore animi repudiandae? Placeat beatae quaerat incidunt, corporis maiores libero eaque commodi, quos rem tempora debitis veritatis 
                         eum explicabo natus, enim quod labore soluta nobis esse porro repudiandae dolores ipsa. Odit sint modi odio, recusandae provident beatae, facilis
                          sequi commodi obcaecati pariatur cumque, suscipit reiciendis?</p>

                </div>
                <div className="about-content2">
                    <img src={about} alt="" />
                </div>
            </div>
            <div className="about-img2">

                <div className="img1">
                <img src={a1} alt="" />
                <h4>Henry</h4>
                </div>
                <div className="img2">
                <img src={a2} alt="" />
                <h4>Robert</h4>
                </div>
                <div className="img3">
                <img src={a3} alt="" />
                <h4>Smith</h4>
                </div>
                
            </div>


        <footer className='footer'>

        </footer>

        </div>
    )
}

export default About;