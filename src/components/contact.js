import React from 'react'
import { FaFacebookSquare, FaTwitter , FaLinkedinIn , FaInstagram} from 'react-icons/fa';
import p1 from './images/p1.jpeg';
import p2 from './images/p2.jpeg';
import p3 from './images/p3.jpeg';
import p4 from './images/p4.jpeg';
import p5 from './images/p5.jpeg';
import p6 from './images/p6.jpeg';


export default function Contact() {
  return (
    <div className='contact'>
        <div className='heading'>
            <h4>Meet Us</h4>
            <h5>want to know more  ? Reach out to Our Sale Team </h5>
            <p>E-commerce is the buying and selling of goods or services over the internet. It has become an increasingly popular way to shop, hope to see you.</p>
        </div>


        <div className='out-team'>

            <div className="container">

                <div className="main-card">

                    <div className="cards">

                        <div className="card">
                            <div className="content">
                                <div className="img">
                                    <img src={p1} alt=""></img>
                                </div>
                                <div className="details">
                                    <div className="name">Tomas Edison</div>
                                    <div className="job">Sales</div>
                                </div>
                                <div className="media-icons">
                                    <a href="test"><i>{<FaFacebookSquare />}</i></a>
                                    <a href="test"><i>{< FaTwitter /> }</i></a>
                                    <a href="test"><i>{< FaLinkedinIn /> }</i></a>
                                    <a href="test"> <i>{< FaInstagram /> }</i></a>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="content">
                                <div className="img">
                                <img src={p2} alt=""></img>
                                </div>
                                <div className="details">
                                    <div className="name">Nicola Tesla</div>
                                    <div className="job">Marketing</div>
                                </div>
                                <div className="media-icons">
                                    <a href="test"><i>{<FaFacebookSquare />}</i></a>
                                    <a href="test"><i>{< FaTwitter /> }</i></a>
                                    <a href="test"><i>{< FaLinkedinIn /> }</i></a>
                                    <a href="test"> <i>{< FaInstagram /> }</i></a>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="content">
                                <div className="img">
                                <img src={p3} alt=""></img>
                                </div>
                                <div className="details">
                                    <div className="name">Ibn Sina</div>
                                    <div className="job">Customer Care</div>
                                </div>
                                <div className="media-icons">
                                    <a href="test"><i>{<FaFacebookSquare />}</i></a>
                                    <a href="test"><i>{< FaTwitter /> }</i></a>
                                    <a href="test"><i>{< FaLinkedinIn /> }</i></a>
                                    <a href="test"> <i>{< FaInstagram /> }</i></a>
                                </div>
                            </div>
                        </div> 

                        <div className="card">
                                <div className="content">
                                    <div className="img">
                                    <img src={p4} alt=""></img>
                                    </div>
                                    <div className="details">
                                        <div className="name">Kgawarithmi</div>
                                        <div className="job">Archtict</div>
                                    </div>
                                    <div className="media-icons">
                                        <a href="test"><i>{<FaFacebookSquare />}</i></a>
                                        <a href="test"><i>{< FaTwitter /> }</i></a>
                                        <a href="test"><i>{< FaLinkedinIn /> }</i></a>
                                        <a href="test"> <i>{< FaInstagram /> }</i></a>
                                    </div>
                                </div>
                        </div>

                        <div className="card">
                            <div className="content">
                                <div className="img">
                                <img src={p5} alt=""></img>
                                </div>
                                <div className="details">
                                    <div className="name">Hebta</div>
                                    <div className="job">Sales</div>
                                </div>
                                <div className="media-icons">
                                    <a href="test"><i>{<FaFacebookSquare />}</i></a>
                                    <a href="test"><i>{< FaTwitter /> }</i></a>
                                    <a href="test"><i>{< FaLinkedinIn /> }</i></a>
                                    <a href="test"> <i>{< FaInstagram /> }</i></a>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="content">
                                <div className="img">
                                <img src={p6} alt=""></img>
                                </div>
                                <div className="details">
                                    <div className="name">Eva Green</div>
                                    <div className="job">Marketing </div>
                                </div>
                                <div className="media-icons">
                                    <a href="test"><i>{<FaFacebookSquare />}</i></a>
                                    <a href="test"><i>{< FaTwitter /> }</i></a>
                                    <a href="test"><i>{< FaLinkedinIn /> }</i></a>
                                    <a href="test"> <i>{< FaInstagram /> }</i></a>
                                </div>
                            </div>
                        </div> 

                    </div>
                </div>
            </div>
        </div>
        

        <div className="form">
            <h1 className="title">Contact Us Directly</h1>

            <form action="">
                
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">full name</span>
                        <input type="text" required></input>
                    </div>

                    <div className="input-box">
                        <span className="details">username</span>
                        <input type="text" required></input>
                    </div>

                    <div className="input-box">
                        <span className="details">email</span>
                        <input type="text" required></input>
                    </div>

                    <div className="input-box">
                        <span className="details">phone</span>
                        <input type="text" required></input>
                    </div>

                    <div className="input-box">
                        <span className="details">password</span>
                        <input type="text" required></input>
                    </div>

                    <div className="input-box">
                        <span className="details">confirm password</span>
                        <input type="text"  required></input>
                    </div>

                </div>

                <div className="gender-details">
                    <input type="radio" name="gender" id="dot-1"></input>
                    <input type="radio" name="gender" id="dot-2"></input>
                    <input type="radio" name="gender" id="dot-3"></input>
                    <span class="gender-title">gender</span>
                    <div className="category">

                        <label for="dot-1">
                            <span className="dot one"></span>
                            <span className="gender">male</span>
                        </label>

                        <label for="dot-2">
                            <span className="dot two"></span>
                            <span className="gender">female</span>
                        </label>


                        <label for="dot-3">
                            <span className="dot three"></span>
                            <span className="gender">prefer not to say</span>
                        </label>


                    </div>
                </div>

                <div className="button">
                    <input type="submit" value="Register"></input>
                </div>
            </form>
        </div>    
    </div>
  )
}
