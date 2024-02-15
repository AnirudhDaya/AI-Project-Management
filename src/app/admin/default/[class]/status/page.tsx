"use client"
import Widget from 'components/widget/Widget';
import React, { useState, useEffect } from 'react';
import { MdEditNote,MdOutlineVisibility, MdOutlineSchedule, MdMarkEmailRead  } from 'react-icons/md';
import ComplexTable from 'components/admin/data-tables/ComplexTable';
import tableDataComplex from 'variables/data-tables/tableDataComplex';

const Dashboard = ({params}) => {
    return (
      <div  >
        {/* Card widget */}
  
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6 ">
          {/* <Widget
            icon={<MdEditNote className="h-7 w-7" />}
            title={''}
            subtitle={'Forms'}
          /> */}
          {/* <Widget
            icon={<MdOutlineSchedule className="h-7 w-7" />}
            title={''}
            subtitle={'View Responses'}
          /> */}
          {/* <Widget
            icon={<MdOutlineVisibility  className="h-7 w-7" />}
            title={''}
            subtitle={'View Responses'}
          /> */}
          
        </div>
        <div className='mt-5'>

          <ComplexTable tableData={tableDataComplex} />
        </div>
      </div>
    );
  };
  
  export default Dashboard;