import React from 'react'
import {BsList,BsSortDownAlt} from 'react-icons/bs';
import {MdOutlineWindow,MdArrowDropDownCircle} from 'react-icons/md';
// import {IoMdArrowDropdown} from 'react-icons/io';
import './card.css';

const Card = () => {
  return (
    <>
    <div className="maincontainer">
        <div className="iconcontainer">
        <BsList size="24px" className="icon1"/>
         <MdOutlineWindow size="24px" className="iconclass"/>
         <BsSortDownAlt size="23px" className="sorticon"/> <span className="sort">Sort by:</span>
         <button className="btn">RELEVANCE <MdArrowDropDownCircle classname="icon2"size="14px"/></button>

        </div>
        

        
    </div>

    
    
    </>
  )
}

export default Card