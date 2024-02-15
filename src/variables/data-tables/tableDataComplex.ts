type RowObj = {
  name: string;
  status: string;
  teamMembers: string;
  documents: string;
};

const tableDataComplex: RowObj[] = [
  {
    name: 'AI Project Management Tool',
    documents: "Report",
    status: 'Approved',
    teamMembers: '12 Jan 2021',
  },
  {
    name: 'AI Project Management Tool',
    documents: "Report",
    status: 'Rejected',
    teamMembers: '12 Jan 2021',
  },
  {
    name: 'AI Project Management Tool',
    documents: "Report",
    status: 'Under Review',
    teamMembers: '12 Jan 2021',
  },
  {
    name: 'AI Project Management Tool',
    documents: "Report",
    status: 'Approved',
    teamMembers: 'Anirudh Dayanandan, Fahad Puzhakkaraillath Noushad, Martin James Purathur',
  },
  {
    name: 'AI Project Management Tool',
    documents: "Report",
    status: 'Approved',
    teamMembers: '12 Jan 2021',
  },
 
];
export default tableDataComplex;
