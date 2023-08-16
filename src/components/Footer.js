import React from 'react'
import { FaFacebookSquare, FaTwitter  , FaInstagram} from 'react-icons/fa';
export default function Footer() {
  return (
    <footer>	
		<div className="container">
			<div className="row">

				<div className="col">
					<h4>shop</h4>
					<ul>
						<li><a href= 'a' >Women</a></li>
						<li><a href= 'a' >Divided</a></li>
						<li><a href= 'a' >Men</a></li>           
						<li><a href= 'a' >Baby</a></li>
						<li><a href= 'a' >Kids</a></li>
						<li><a href= 'a' >Home</a></li>
						<li><a href= 'a' >Sport</a></li>
						<li><a href= 'a' >Sale</a></li>
						<li><a href= 'a' >Sustainability</a></li>
					</ul>
				</div>				
				<div className="col">
					<h4>corporate info</h4>
					<ul>
						<li><a href="a">about us</a></li>
						<li><a href="a">our services</a></li>
						<li><a href="a">privacy policy</a></li>
						<li><a href="a">Returns & Refunds</a></li>
						<li><a href="a">delivery information</a></li>
					</ul>
				</div>

				<div className="col">
					<h4>get help</h4>
					<ul>
						<li><a href="a">FAQ</a></li>
						<li><a href="a">shipping</a></li>
						<li><a href="a">returns</a></li>
						<li><a href="a">order status</a></li>
						<li><a href="a">payment options</a></li>
					</ul>
				</div>

				<div className='newsletter col'>
					<h4>Newsletter</h4>
					<p>be the first to know about our newest arrivals, special offers and store events near you.</p>
					<form>
						<input className='email' type='text' placeholder='Enter your email address'></input>
						<button className='signup'>sing up</button>
					</form>
				</div>
			</div>
				<div className="customer-servie">
					<h5>customer service </h5>
					<p>For You 02-777-99-888</p>
					<p>We are open Saturday to Thursday 8 am to 9 pm & Friday 12 pm to 9 pm (Egypt local time, GMT +3)</p>
					<h6>Selim Group</h6>
					<div className='social'>
						<i>{<FaFacebookSquare />}</i>
						<i>{< FaTwitter /> }</i>
                        <i>{< FaInstagram /> }</i>
					</div>
				</div>
		</div>
	</footer>
  )
}
