"use client"
import React from 'react';
import '../styles/globals.css';
import '../styles/style.css'
import '../styles/fonts.css'
// import TablePage from './TablePage'
import Datepickercomponent from './Datepickercomponent';
import AllProjecttable from '../../components/Childcomponent/AllProjecttable'
import Allviews from '../../components/Childcomponent/Allviews';

import Mytodos from '../../components/Childcomponent/Mytodos';
import PMIfollowups from '../../components/Childcomponent/PMIfollowups';
import Vendorfallowups from '../../components/Childcomponent/Vendorfallowups';
import Workcategories from '../../components/Childcomponent/Workcategories';
//import makeData from '../../components/Childcomponent/makeData'
import Myaccount from '../../components/Sidebar/Myaccount'
import SeperateAppBar from '../../components/Sidebar/SeperateAppBar';
import SeperateDrawer from '../../components/Sidebar/SeperateDrawer';
import Sidebarheader from '../../components/Sidebar/Sidebarheader';
import TableComp from './TableComp';


function Dashboard() {
  return (
    
   

      <div>
        <header>
        <Sidebarheader/>
       
        </header>
  
{/* <body style={{backgroundColor:'#efefef'}}> */}
        <main style={{backgroundColor:'#efefef'}}>
        {/* <TablePage /> */}
        {/* <TableComp /> */}
        </main>
     
        {/* </body> */}
   
    

    </div>
    
   
  );
}

export default Dashboard;
