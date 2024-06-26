import React from 'react'


function Cards(props) {
  return (
        <div>
          <div className='Card'>
            <div className='Card-conatiner'>
            <img src= {props.imgsrc} alt='UI/Ux Design'></img>
            <h3 className='heading'>{props.title}</h3>
            <p className='Describtion'>{props.Describtion}</p>
            <a href={props.link}>Learn More</a>
          </div>
        </div>
        </div>
      )
    }
    
  

export default Cards
