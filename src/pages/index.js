import React from "react"
import { Link } from "gatsby-link"
import TypeWriterEffect from 'react-typewriter-effect';
import scrollTo from 'gatsby-plugin-smoothscroll';
//
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {Container , Row , Col } from "react-bootstrap"
import logo from '../images/tilak.jpg';
import java from '../images/icons/java.png';
import oracle from '../images/icons/oracle.png';
import angular from '../images/icons/angular.png';
import spring from '../images/icons/spring.png';
import rest from '../images/icons/rest.png';
import ibatis from '../images/icons/ibatis.png';
import jboss from '../images/icons/jboss.png';
import xml from '../images/icons/xml.png';
import eclipse from '../images/icons/eclipse.png';

import "../style/layout.css"
import desc from "../components/description"


const IndexPage = () => {

	
	return (<section class="landing">	

			<div class=".row1">
				<h1  class="name" >Hi , I am Tilak 	</h1>					
				<img class="image1" src={logo}></img>
						
			</div>	

				<p class="desc1">
				<TypeWriterEffect
				            textStyle={{ 
				            	fontFamily: "sans-serif",			
				            	fontSize: '1.5rem',
							    fontWeight: 100,
							    maxWidth: 600,     	
							   	display:'inline',    							
				        	}}
				        	loop={true}
				            startDelay={100}
				            cursorColor="black"
				            text="Have 3 Years of experience in Software Development"
				            typeSpeed={200}
				          
				          />
				 </p>
				 
			<Container class="container">
			<Row>
				<Col xs lg="auto"> <i className="fa fa-file resume"></i> <a target="_blank" class="resume" href="https://drive.google.com/file/d/1CaJOFPJMo5lNnQE1a2a6MRnz1Azs5t6l/view?usp=sharing"> Resume</a></Col>	
				<Col xs lg="auto" className="porfoliolink" onClick={() => scrollTo('#portfolio-header')}> <i className="fa fa-laptop"></i> Portfolio</Col>				
				<Col xs g="auto"> <a class="linkedin" target="_blank" href="https://www.linkedin.com/in/tilak-raj-a0465696/"> Linkedin <i className="fa fa-linkedin"></i></a></Col>	
			</Row>
			</Container>

			<div class="background">
			<div class="portfolio">
					<Row id="portfolio-header">
						<h1> Portfolio</h1>	
					</Row>	

					<div class="title-header" >
						<h3> A little about me </h3>	
					</div>		
					<div class="descriptions">
						<p> My name is Tilak, I am from Mangalore,Karnataka . Currently I am working at NTT Data FA Insurance as a <em>Senior Software Engineer with 
						3 years </em>of experience building enterprise web applications, I have BTech degree focused on Information Technology from <em>NITK</em>, Surathkal . </p>
					</div>	

					<div class="title-header">
						<h3> Tech I am Familiar with </h3>	
					</div>		
					<div >
						<ul>
							<li>Java <img class="icons" src={java}></img>	</li>
							<li>AngularJs <img class="icons" src={angular}></img></li>
							<li>Oracle SQL <img class="icons" src={oracle}></img></li>
							<li>EJB <img class="icons" src={java}></img></li>
							<li>Spring <img class="icons" src={spring}></img></li>
						</ul>
						<ul>
							<li>Rest API <img class="icons" src={rest}></img></li>
							<li>iBatis <img class="icons" src={ibatis}></img></li>							
							<li>JBoss <img class="icons" src={jboss}></img></li>
							<li>XML <img class="icons" src={xml}></img></li>
							<li>Eclipse IDE <img class="icons" src={eclipse}></img></li>
						</ul>	
								
					</div>						

					
					<div class="title-header">
						<h3>Work Experience </h3>	
					</div>

					<div class="sub-title-header">
						<h4> NTT DATA FA Insurance , Senior Software Engineer(March 2018 - Present)</h4>	
					</div>		
					<div class="descriptions">
						
						<p> i) FirstGen Product team: Developed key components for product and stabilized product UI with UI
							framework team. Used <em>AngularJS</em>, jQuery, HTML and Java primarily.</p> <p> 
							ii) <em>FirstGen Project team (Royal Sundaram): </em> Customization of Product from requirements to successful
							Go-live of the project.</p><p>iii)Used various J2EE Technologies, Spring and EJB frameworks, Design Patterns,
							OOPs Concepts, <em>RESTful Web services</em> and designing/administering Oracle databases.</p><p>iv)
							 Wrote production level code across different product modules using <em>Java</em>, Angularjs, EJB, iBatis, XML,
							JavaScript, Oracle SQL and developed REST API’s as per business requirements.</p><p> v)
							 Post go live supported the project by fixing production issues, data migration, deployment activities.
							Have 3 months of onsite experience supporting UAT and Go-live activities of the project. </p>
					</div>		

					<div class="sub-title-header">
						<h4> Euprime Pvt Lmt , Software Engineer Intern (April 2016 - June 2016)</h4>	
					</div>	

					<div class="descriptions">
						<p> Developed web application using MEAN stack and Flask. Focused on
						development using AngularJS, Python with MVC architecture. Used several JavaScript frameworks
						like d3, datatables, uirouter etc.
						</p>
					</div>	


					<div class="title-header">
						<h3> Projects</h3>	
					</div>	

					<div class="descriptions">
						<p> 1) <em>Generalized link and text-based forum crawler</em>- Python based Light-weight forum crawler to remove
						redundant and useless data to create a traversal path containing only useful pages with good number
						of links or text.
						</p>
						<p> 2) <em>Hybrid News recommendation system </em>- Developed a news recommending system based on a
						combination of personalized news recommendation technique and collaborative technique.
						Implemented Naive Bayes algorithm to personalize news articles based on the user click behavior.
						Multidimensional database is used in recommending general news trends that are relevant to the
						user, based on browsing patterns of similar users.
						</p>
						<p> 3) <em>LetusDonate</em> - Developed an interface for Charity donations using Django backend,
							HTML/CSS/JS/Bootstrap frontend and MySQL database. Supports volunteer, donor, and NGO
							account types.
						</p>
					</div>	
					

					<div class="title-header">
						<h3> Education</h3>	
					</div>	

					<div class="descriptions">
						<p>  • BTech in Information Technology    
						</p>
						<p>     National Institute of Technology Karnataka, Surathkal 2013 – 2017 CGPA of 6.78 

						</p>
						<p> • Senior Secondary School 

						</p>
						<p>     Jawahar Navodaya Vidyalaya, Mudipu (CBSE-AISSE) 2012-2013 % of 92.8%
						</p>
						<p> • Secondary School

						</p>
						<p>    Jawahar Navodaya Vidyalaya, Mudipu (CBSE-AISSE) 2010-2011 CGPA of 10
						</p>
					</div>	
					
					<div class="title-header">
						<h3> Certifications/Other Courses</h3>	
					</div>	

					<div class="descriptions">
						<p> i) <a class="linkedin" href="https://coursera.org/share/6bf256ed7ae601695bae651188c85dad">AWS Fundamentals: Going Cloud-Native </a>
						</p>
						<p> ii) <a class="linkedin" href="https://coursera.org/share/ca11016dd08cf03c94cad9e388b13332">AWS Fundamentals: Addressing Security Risk </a>
						</p>
					</div>						

			</div>	
			
				</div>

						<div class="footer">
							© powered by coffee <i class="fa fa-coffee fa-lg"></i>
						</div>
				 
							
	</section>)
		
}

export default IndexPage
