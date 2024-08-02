import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import { gsap, CSSPlugin, Expo, Power3 } from "gsap";
gsap.registerPlugin(CSSPlugin);

axios.defaults.withCredentials = true;
import bag1 from "../assets/bag1.jpg"
import bag2 from "../assets/bag2.jpg"
import bag3 from "../assets/bag3.jpg"
import ProtectedRoute from './ProtectedRoute';
const Home = () => {
  const [counter, setCounter] = useState(0);
  const [login, setLogin] = useState(false)
  const handleloginfun = () => {
    setLogin(prev => !prev)
  }
  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 4
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 50);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1, //1.2
      delay: 0.1, //0.7
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.2, //0.7
        delay: 0.2, //0.1
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
  };
  //   const t2=gsap.timeline();
  //  t2.from(".home-right-img1 img",{
  //   y:-100,
  //   delay:10,
  //   duration:3
  //  })
  useGSAP(()=>{
    const t2=gsap.timeline();
    gsap.from(".home-heading",{
      x:-1000,
      duration:0.5,
      delay:4
    })
    t2.from(".home-right-img1 img",{
      opacity:0,
        x:1000,
        delay:4,
        duration:1.2
       })
       t2.from(".home-right-img2 img",{
        opacity:0,
          y:-1000,
          duration:1
         })
         t2.from(".home-right-img3 img",{
          opacity:0,
            y:1000,
            duration:1
           })
  })
  const [rname, setRname] = useState('');
  const [remail, setRemail] = useState('');
  const [rpassword, setRPassword] = useState('');
  const [lemail, setLemail] = useState('');
  const [lpassword, setLPassword] = useState('');
  const navigate = useNavigate();
  const handleregister = (e) => {
    e.preventDefault();
    const fullname = rname;
    const email = remail;
    const password = rpassword;
    const data = {
      fullname,
      email,
      password
    }
    axios.post("http://localhost:3000/user/register", data).then(() => {
      navigate("/shop")
    }).catch((error) => {
      console.log("error while registering")
    })
  }
  const handlelogin = (e) => {
    e.preventDefault();
    const email = lemail;
    const password = lpassword;
    const data = {
      email,
      password
    }
    axios.post("http://localhost:3000/user/login", data).then(() => {
      navigate("/shop")
    }).catch((error) => {
      console.log("error while registering")
    })
  }
  return (
    <AppContainer>
      <Loading>
        <Follow className="follow"></Follow>
        <ProgressBar
          className="hide"
          id="progress-bar"
          style={{ width: counter + "%" }}
        ></ProgressBar>
        <Count id="count" className="hide font-Playfair Display font-serif">
          {counter}%
        </Count>
      </Loading>
      <Content className='content'>
        <div className='flex w-[100vw]  h-[5rem] items-center py-10 justify-between border-b-[1px]  shadow-lg'>
          <div className="homeleft mx-6">
            <h1 className="text-white font-Badoni text-4xl">Scatch</h1>
          </div>
          <div className="homeright mr-20 gap-6 flex text-lg items-center">
            <div >
              <button className='login-btnn px-4 py-2 btn bg-yellow-50 rounded-3xl font-Arsenal' onClick={handleloginfun}>
                <a href="#" >Login</a>
              </button>
            </div>
            <div>
              <Link>
                <button className='px-4 py-2 btn bg-yellow-50 rounded-3xl font-Arsenal login-btnn'>Admin Login</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='h-[100vh] text-white  w-screen mt-4 font-Badoni'>
          <h1 className='text-5xl text-center font-bold font-Arsenal  text-white'>Your One Stop Bag Shop !!</h1>
          <div className='h-[93%] flex relative'>
            <div className="home-left  w-[40%] text-white  flex flex-col justify-center items-center">
              <div>
                <h1 className='font-Arsenal home-heading font-extrabold text-4xl text-center'>Elevate Your Style with Scatch</h1>
              </div>
              <div className='ml-10 '>
                <p className='text-left font-semibold font-sans text-wrap'>Discover our collection of stylish and functional bags, crafted for every occasion. From elegant handbags to versatile totes, each piece combines premium materials with timeless design. Find your perfect bag today and experience the perfect blend of fashion and utility.</p>
              </div>

            </div>
            <div className="home-right relative  w-[60%] ">
              <div className=' home-right-img1 rounded-xl absolute right-[10%] top-[30%]'>
                <img className='h-60 rounded-xl' src={bag1} alt="" />
              </div>
              <div className=' home-right-img2 rounded-xl absolute left-[5%] top-[2%]'>
                <img className='h-60 rounded-xl' src={bag2} alt="" />
              </div>
              <div className=' home-right-img3 rounded-xl absolute left-[5%] top-[50%]'>
                <img className='h-60 rounded-xl' src={bag3} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-evenly' id='home-div'>
          {login ? <div className="register bg-black h-[45vh] w-[50vw] text-center mt-5 rounded-xl ">
            <h1 className='text-white text-2xl font-bold font-sans mt-2 tracking-wide'>Register</h1>
            <form className='flex flex-col  items-center'>
              <div className="forminput">
                <input className=' border-2 mt-3 border-solid border-slate-950' onChange={(e) => setRname(e.target.value)} type="text" name='fullname' placeholder='name' />
                <label for="log-in">Name</label>
              </div>
              <div className="forminput">
                <input className=' border-2 mt-3 border-solid border-slate-950' onChange={(e) => setRemail(e.target.value)} type="email" name='email' placeholder='email' />
                <label for="log-in">Email</label>
              </div>
              <div className="forminput">
                <input className=' border-2 mt-3 border-solid border-slate-950' onChange={(e) => setRPassword(e.target.value)} type="text" name='password' placeholder='password' />
                <label for="log-in">Password</label>
              </div>
              <div className="forminput">
                <button type='submit' className='px-4 py-2 w-[90%] rounded-lg cursor-pointer text-white font-bold text-lg bg-blue-500 mt-3' onClick={handleregister}>Register</button>
              </div>
              <p className='text-white'>Already have an account? <span><a href="">Log In</a></span></p>
            </form>
          </div> :
            <div className="register bg-black h-[45vh] w-[50vw] text-center mt-5 rounded-xl ">
              <h1 className='text-white text-2xl font-bold font-sans mt-2 tracking-wide'>Login</h1>
              <form className='flex flex-col  items-center'>
                <div className="forminput">
                  <input className=' border-2 mt-3 border-solid border-slate-950' onChange={(e) => setLemail(e.target.value)} type="email" name='email' placeholder='email' />
                  <label for="log-in">Email</label>
                </div>
                <div className="forminput">
                  <input className=' border-2 mt-3 border-solid border-slate-950' onChange={(e) => setLPassword(e.target.value)} type="text" name='password' placeholder='password' />
                  <label for="log-in">Password</label>
                </div>
                <div className="forminput">
                  <button type='submit' className='px-4 py-2 w-[90%] rounded-lg cursor-pointer text-white font-bold text-lg bg-blue-500 mt-3' onClick={handleregister}>Login</button>
                </div>
                <p className='text-white' onClick={handleloginfun}>Dont have an account? <span><a href="" >Register</a></span></p>
              </form>
            </div>}
          {/* <div className="login flex flex-col">
        <h1>Login</h1>
        <form  className='flex flex-col'>
               <input className='border-2 mt-3 border-solid border-slate-950' onChange={(e)=>setLemail(e.target.value)}  type="email" name='email' placeholder='email' />
               <input className='border-2 mt-3 border-solid border-slate-950' onChange={(e)=>setLPassword(e.target.value)}  type="text" name='password' placeholder='password' />
               <button type='submit' onClick={handlelogin} className='px-4 py-2 bg-gray-400 mt-2'>Login</button>
        </form>
      </div> */}
        </div>
        <Link to="/admin">
          <button className='px-4 py-2  bg-gray-400 mt-2'>Button</button>
        </Link>
        {/* </Styledbtn> */}
      </Content>
    </AppContainer>
  )
}

export default Home

const Content = styled.div`
  height: 100%;
  width: 0%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #0a0a0a;
  padding: auto;
  z-index: 2;
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-direction: column;
  overflow: hidden;
  //  top:50%;
  color: black;
  
  `
const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;
const Follow = styled.div`
  position: absolute;
  background-color: #f2d841;
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;

const Count = styled.p`
  position: absolute;
  font-size: 130px;
  color: #fff;
  transform: translateY(-15px);
  font-weight: 500;
`;

const AppContainer = styled.div`
  width: 100vw;
  height: 150vh;
  color: #000000;
  position: relative;
`;