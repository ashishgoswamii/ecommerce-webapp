import './header.css';
import { useState } from 'react';
export function Header(){
    const [searchText,setSearchText] = useState("");



    return(
        <div className="header-container">        
            <button className='logo-button' >
                Shophub
            </button>
            {searchText}
            <input className='search-box' type="text" placeholder='  Search' id="fname" name="fname"
                value={searchText}  onChange={e => setSearchText(e.target.value)}
            ></input>

            <div className='action-buttons'>
                <button>
                    Login
                </button>
                <button>
                    Cart
                </button>
            </div>
        </div>
    )
}