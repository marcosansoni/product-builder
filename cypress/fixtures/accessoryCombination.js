const accessoryCombination = [
  // white - i3
  {
    model: 'i3', color: 'white', accessories: [], price: '$42400', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i3', color: 'white', accessories: ['BMW_CHARGING_STATION'], price: '$43480', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i3', color: 'white', accessories: ['BMW_MAINTENANCE_PROGRAM_UPGRADE'], price: '$44295', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i3', color: 'white', accessories: ['BMW_ONE_YEAR'], price: '$43375', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i3', color: 'white', accessories: ['BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE'], price: '$45375', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i3', color: 'white', accessories: ['BMW_CHARGING_STATION', 'BMW_ONE_YEAR'], price: '$44455', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i3', color: 'white', accessories: ['BMW_MAINTENANCE_PROGRAM_UPGRADE', 'BMW_ONE_YEAR'], price: '$45270', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i3', color: 'white', accessories: ['BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE', 'BMW_ONE_YEAR'], price: '$46350', summaryLabelColor: 'WHITE',
  },
  // grey - i3
  {
    model: 'i3', color: 'gray', accessories: [], price: '$42950', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i3', color: 'gray', accessories: ['BMW_CHARGING_STATION'], price: '$44030', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i3', color: 'gray', accessories: ['BMW_MAINTENANCE_PROGRAM_UPGRADE'], price: '$44845', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i3', color: 'gray', accessories: ['BMW_ONE_YEAR'], price: '$43925', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i3', color: 'gray', accessories: ['BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE'], price: '$45925', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i3', color: 'gray', accessories: ['BMW_CHARGING_STATION', 'BMW_ONE_YEAR'], price: '$45005', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i3', color: 'gray', accessories: ['BMW_MAINTENANCE_PROGRAM_UPGRADE', 'BMW_ONE_YEAR'], price: '$45820', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i3', color: 'gray', accessories: ['BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE', 'BMW_ONE_YEAR'], price: '$46900', summaryLabelColor: 'BLACK',
  },
  // orange - i3
  {
    model: 'i3', color: 'orange', accessories: [], price: '$42950', summaryLabelColor: 'RED',
  },
  {
    model: 'i3', color: 'orange', accessories: ['BMW_CHARGING_STATION'], price: '$44030', summaryLabelColor: 'RED',
  },
  {
    model: 'i3', color: 'orange', accessories: ['BMW_MAINTENANCE_PROGRAM_UPGRADE'], price: '$44845', summaryLabelColor: 'RED',
  },
  {
    model: 'i3', color: 'orange', accessories: ['BMW_ONE_YEAR'], price: '$43925', summaryLabelColor: 'RED',
  },
  {
    model: 'i3', color: 'orange', accessories: ['BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE'], price: '$45925', summaryLabelColor: 'RED',
  },
  {
    model: 'i3', color: 'orange', accessories: ['BMW_CHARGING_STATION', 'BMW_ONE_YEAR'], price: '$45005', summaryLabelColor: 'RED',
  },
  {
    model: 'i3', color: 'orange', accessories: ['BMW_MAINTENANCE_PROGRAM_UPGRADE', 'BMW_ONE_YEAR'], price: '$45820', summaryLabelColor: 'RED',
  },
  {
    model: 'i3', color: 'orange', accessories: ['BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE', 'BMW_ONE_YEAR'], price: '$46900', summaryLabelColor: 'RED',
  },
  // grey i8
  {
    model: 'i8', color: 'black', accessories: [], price: '$140700', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i8', color: 'black', accessories: ['BMW_LASERLIGHT'], price: '$147000', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i8', color: 'black', accessories: ['BMW_CHARGING_STATION'], price: '$141780', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i8', color: 'black', accessories: ['BMW_MAINTENANCE_PROGRAM_UPGRADE'], price: '$142595', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i8', color: 'black', accessories: ['BMW_ONE_YEAR'], price: '$141675', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i8', color: 'black', accessories: ['BMW_LASERLIGHT', 'BMW_CHARGING_STATION'], price: '$148080', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i8', color: 'black', accessories: ['BMW_LASERLIGHT', 'BMW_MAINTENANCE_PROGRAM_UPGRADE'], price: '$148895', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i8', color: 'black', accessories: ['BMW_LASERLIGHT', 'BMW_ONE_YEAR'], price: '$147975', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i8', color: 'black', accessories: ['BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE'], price: '$143675', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i8', color: 'black', accessories: ['BMW_CHARGING_STATION', 'BMW_ONE_YEAR'], price: '$142755', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i8', color: 'black', accessories: ['BMW_MAINTENANCE_PROGRAM_UPGRADE', 'BMW_ONE_YEAR'], price: '$143570', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i8', color: 'black', accessories: ['BMW_LASERLIGHT', 'BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE'], price: '$149975', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i8', color: 'black', accessories: ['BMW_LASERLIGHT', 'BMW_CHARGING_STATION', 'BMW_ONE_YEAR'], price: '$149055', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i8', color: 'black', accessories: ['BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE', 'BMW_ONE_YEAR'], price: '$144650', summaryLabelColor: 'BLACK',
  },
  {
    model: 'i8', color: 'black', accessories: ['BMW_LASERLIGHT', 'BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE', 'BMW_ONE_YEAR'], price: '$150950', summaryLabelColor: 'BLACK',
  },
  // white i8
  {
    model: 'i8', color: 'white', accessories: [], price: '$142500', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i8', color: 'white', accessories: ['BMW_LASERLIGHT'], price: '$148800', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i8', color: 'white', accessories: ['BMW_CHARGING_STATION'], price: '$143580', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i8', color: 'white', accessories: ['BMW_MAINTENANCE_PROGRAM_UPGRADE'], price: '$144395', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i8', color: 'white', accessories: ['BMW_ONE_YEAR'], price: '$143475', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i8', color: 'white', accessories: ['BMW_LASERLIGHT', 'BMW_CHARGING_STATION'], price: '$149880', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i8', color: 'white', accessories: ['BMW_LASERLIGHT', 'BMW_MAINTENANCE_PROGRAM_UPGRADE'], price: '$150695', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i8', color: 'white', accessories: ['BMW_LASERLIGHT', 'BMW_ONE_YEAR'], price: '$149775', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i8', color: 'white', accessories: ['BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE'], price: '$145475', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i8', color: 'white', accessories: ['BMW_CHARGING_STATION', 'BMW_ONE_YEAR'], price: '$144555', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i8', color: 'white', accessories: ['BMW_MAINTENANCE_PROGRAM_UPGRADE', 'BMW_ONE_YEAR'], price: '$145370', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i8', color: 'white', accessories: ['BMW_LASERLIGHT', 'BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE'], price: '$151775', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i8', color: 'white', accessories: ['BMW_LASERLIGHT', 'BMW_CHARGING_STATION', 'BMW_ONE_YEAR'], price: '$150855', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i8', color: 'white', accessories: ['BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE', 'BMW_ONE_YEAR'], price: '$146450', summaryLabelColor: 'WHITE',
  },
  {
    model: 'i8', color: 'white', accessories: ['BMW_LASERLIGHT', 'BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE', 'BMW_ONE_YEAR'], price: '$152750', summaryLabelColor: 'WHITE',
  },
];

export const accessoriesList = {
  i3: ['BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE', 'BMW_ONE_YEAR'],
  i8: ['BMW_LASERLIGHT', 'BMW_CHARGING_STATION', 'BMW_MAINTENANCE_PROGRAM_UPGRADE', 'BMW_ONE_YEAR'],
};

export default accessoryCombination;
