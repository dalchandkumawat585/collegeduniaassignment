import React, { useEffect, useState } from 'react';
import './App.css';
import college1 from './college_01.jpg';
import college2 from './college_02.jpg';
import collegejson from './colleges.json';
function App() {
  const [collegeJsonTemp,setCollegeJsonTemp] = useState(collegejson.colleges.slice(0,25));
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleScroll = () =>{
    if (window.innerHeight + document.documentElement.scrollTop <= document.documentElement.offsetHeight-20) return;
    setTimeout(()=>setCollegeJsonTemp(collegejson.colleges),2000);
  }
  return (
    <div className="App">
      <div className="body">
        <h3 className="colleges">Colleges in North India</h3>
        <br></br>
        {collegeJsonTemp.map((collegeItem,index)=>{
          return (      
            <div className="col" key={index}>
              <div className="card">
                <div className="hero-image" style={{backgroundImage:(index%4===0||index%4===3)?`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${college1})`:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${college2})`}}>
                  {collegeItem.promoted?<div className="promotion">
                    <h3>PROMOTED</h3>
                  </div>:null}
                  <div className="hero-text">
                    <div className="top">
                      <p><span style={{fontSize:"20px", fontWeight:"bold", textAlign:"center"}}>{collegeItem.rating}</span> /5</p>
                      <p>{collegeItem.rating_remarks}</p>
                    </div>
                    <div className="bottom">
                      {collegeItem.tags.map((item,index)=>{
                        return (
                          <div className="bestcollege" key={index}>
                            {item}
                          </div>
                        )
                      })}
                      <div className="bottomright">
                        #{collegeItem.ranking}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="leftcontent">
                    <h1 className="collegename">{collegeItem.college_name} {'   '}
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                    </h1>
                    <h3 className="nearby">{collegeItem.nearest_place[0]} <span className="awayfrom">| {collegeItem.nearest_place[1]}</span> </h3>
                    <h2 className="morenearby"><span className="match">93% Match :</span>{collegeItem.famous_nearest_places}</h2>
                    <div className="offer">
                      {collegeItem.offertext} <span style={{color:"#1999d2"}}>LOGIN</span> 
                    </div>
                  </div>
                  <div className="rightcontent">
                    <h5><span style={{textDecoration:"line-through",fontSize:"15px"}}>&#8377; {collegeItem.original_fees} </span><span><ul className="discount"><li>{collegeItem.discount}</li></ul></span></h5>
                    <h2 className="price">&#8377; {collegeItem.discounted_fees}</h2>
                    <p style={{color:"#444444",fontSize:"14px"}}>{collegeItem.fees_cycle}</p>
                    <div style={{color:"#37b396",fontWeight:"bold",fontSize:"17px"}}><ul className="cancel">{collegeItem.amenties.map((item,index)=>{
                      return (
                        <li key={index}>
                          {item}
                        </li>
                      )
                    })}</ul></div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
