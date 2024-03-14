import React from 'react';

export default function Sidebar() {
  return (
      <div>
      <div className='subash'>
          <i  className="bx" class='bx bx-menu'> </i>
          <span className='logo-name'>Health Care </span>
      </div>

      <div className='container'>
        <nav className='navbar' >
        <div className='logo'>
        <i  className="bx" class='bx bx-menu'> </i>
            <span className='logo-name'>Health Care </span>
            <span className='ad' style={{marginLeft:"900px"}}>admin</span>
        </div>
          
        <div className='sidebar'>
        <div className='logo'>
        <i  className="bx" class='bx bx-menu'> </i>
            <span className='logo-name'>Health Care </span>
        </div>

            <div className='sidebar-content'>
                <ul className='lists'>
                    <li className='list'>
                       <a href="#" className='navlink'>
                       <i class='bx bx-home icons'></i>
                       <span className='link'>Dasboard</span>
                       </a>
                    </li>
                    <li className='list'>
                       <a href="#" className='navlink'>
                       <i class='bx bx-layer icons'></i>
                       <span className='link'>MostPopular</span>
                       </a>
                    </li>
                    <li className='list'>
                       <a href="#" className='navlink'>
                       <i class='bx bx-cube icons'></i>
                       <span className='link'>FetureTopics</span>
                       </a>
                    </li>
                    <li className='list'>
                       <a href="#" className='navlink'>
                       <i class='bx bx-detail icons'></i>
                       <span className='link'>TopReads</span>
                       </a>
                    </li>
                    <li className='list'>
                       <a href="#" className='navlink'>
                       <i class='bx bx-devices icons'></i>
                       <span className='link'>WatchNow</span>
                       </a>
                    </li>
                    <li className='list'>
                       <a href="#" className='navlink'>
                       <i class='bx bx-filter icons'></i>
                       <span className='link'>RecentlyPublished</span>
                       </a>
                    </li>
                    <li className='list'>
                       <a href="#" className='navlink'>
                       <i class='bx bx-globe icons' ></i>
                       <span className='link'>BrowserCategories</span>
                       </a>
                    </li>
                </ul>
                <div className='bottom-content'>
                  <li className='list'>
                       <a href="#" className='navlink'>
                       <i class='bx bxs-cog icons'></i>
                       <span className='link'>Setting</span>
                       </a>
                    </li>

                    <li className='list'>
                       <a href="#" className='navlink'>
                       <i class='bx bxs-log-out icons'></i>
                       <span className='link'>Logout</span>
                       </a>
                    </li>

                </div>

            </div>
        </div>
        </nav>
        
      </div>
    </div>
  )
}
