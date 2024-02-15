"use client"
import Widget from 'components/widget/Widget';
import React, { useState, useEffect } from 'react';
import { MdEditNote,MdOutlineVisibility, MdOutlineSchedule, MdMarkEmailRead  } from 'react-icons/md';
import Link from 'next/link';

const Dashboard = ({params}) => {
    return (
      <div  >
        {/* Card widget */}
  
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6 ">
          <Link href="/admin/default/R8B/status">
          <Widget
            icon={<MdEditNote className="h-7 w-7" />}
            title={''}
            subtitle={'Status'}
            />
          </Link>
          <Widget
            icon={<MdOutlineSchedule className="h-7 w-7" />}
            title={''}
            subtitle={'Schedule'}
          />
          <Widget
            icon={<MdOutlineVisibility  className="h-7 w-7" />}
            title={''}
            subtitle={'View Reports'}
          />
          
          
        </div>
      </div>
    );
  };
  
  export default Dashboard;