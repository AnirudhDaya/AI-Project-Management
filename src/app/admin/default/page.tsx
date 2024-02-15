// import MiniCalendar from 'components/calendar/MiniCalendar';
// import WeeklyRevenue from 'components/admin/default/WeeklyRevenue';
// import TotalSpent from 'components/admin/default/TotalSpent';
// import PieChartCard from 'components/admin/default/PieChartCard';
// import { IoMdHome } from 'react-icons/io';
// import CheckTable from 'components/admin/default/CheckTable';
// import ComplexTable from 'components/admin/default/ComplexTable';
// import DailyTraffic from 'components/admin/default/DailyTraffic';
// import TaskCard from 'components/admin/default/TaskCard';
// import tableDataCheck from 'variables/data-tables/tableDataCheck';
// import tableDataComplex from 'variables/data-tables/tableDataComplex';
// const Dashboard = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('your_api_url_here');
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       {/* Card widget */}

//       <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-6 ">
//         {data.map((item, index) => (
//           <Widget
//             key={index}
//             icon={<MdBarChart className="h-7 w-7" />}
//             title={item.title}
//             subtitle={`${item.students} Students`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
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
        const getClasses = await fetch('http://192.168.29.116:8000/get_classes/', {
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