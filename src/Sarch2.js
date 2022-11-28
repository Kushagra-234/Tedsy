import React from 'react'
import './search2.css'
import {VscListFilter} from 'react-icons/vsc';
import {GiBoxingGloveSurprise} from 'react-icons/gi'

const Sarch2 = () => {
  return (
    <>


    <div className="maincontainer">

    

<form className="nosubmit">
  <input className="nosubmit" type="search" placeholder="Search from world's antique collection" />
</form>

 <button className="btn"><VscListFilter className="hello" size="20px"/> FILTERS</button>
 <span className="spanele"><GiBoxingGloveSurprise/>  SURPRISE ME</span>

</div>

    
    </>
  )
}

export default Sarch2