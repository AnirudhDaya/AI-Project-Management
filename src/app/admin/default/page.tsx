"use client"
import React, { useState, useEffect } from 'react';
import { IoDocuments } from 'react-icons/io5';
import { MdBarChart, MdDashboard, MdAdd  } from 'react-icons/md';

import Widget from 'components/widget/Widget';
import Link from 'next/link';
import Modal from 'components/admin/default/AddNewCard';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [classes, setClasses] = useState([]);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  useEffect(() => {
    const fetchClasses = async () => {
      const res = await fetch('/api/login', {
        method: 'GET',
      });
      if(res.status === 200)
      {
        const val  = await res.json();
        console.log(val.token.value);
        const getClasses = await fetch('https://pmt-inajc.ondigitalocean.app/get_classes/', {
          method: 'POST',
          headers: {
            Authorization: `Token ${val.token.value}`,
          },
        });
        if(getClasses.status === 200)
        {
          const data = await getClasses.json();
          setClasses(data);
        }
    }
    else
    {
      console.log("No session exists");
    }
      
    };

    fetchClasses();
  }, []);
  return (
    <div>
      {/* Card widget */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-6 ">
      {classes.map(cls => (
        <Link href={`/admin/default/${cls.name}`}> 
          <Widget 
            icon={<MdBarChart />}
            title={`${cls.strength} students`}
            subtitle={cls.name }
            />
        </Link>
        ))}
        <button onClick={openModal}>
          <Widget
            icon={<MdAdd className="h-6 w-6" />}
            title={'  Onboard Students'}
            subtitle={'Add New Class'}
          />
        </button>
        
      </div>
{showModal && (
  <div className="modal-backdrop" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <Modal closeModal={closeModal} /> 
    </div>
  </div>
)}

    </div>
  );
};

export default Dashboard;