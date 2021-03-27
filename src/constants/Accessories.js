import { ModelType } from './Models';

const Accessories = {
  BMW_LASERLIGHT: 'BMW_LASERLIGHT',
  BMW_CHARGING_STATION: 'BMW_CHARGING_STATION',
  BMW_MAINTENANCE_PROGRAM_UPGRADE: 'BMW_MAINTENANCE_PROGRAM_UPGRADE',
  BMW_ONE_YEAR: 'BMW_ONE_YEAR',
};

export const AccessoriesLabel = {
  [Accessories.BMW_LASERLIGHT]: 'BMW Laserlight',
  [Accessories.BMW_CHARGING_STATION]: 'BMW Charging Station',
  [Accessories.BMW_MAINTENANCE_PROGRAM_UPGRADE]: 'BMW Maintenance Program Upgrade',
  [Accessories.BMW_ONE_YEAR]: '1 Year BMW Maintenance Program Upgrade',
};

export const AccessoriesPricesByModel = {
  [ModelType.I3]: {
    [Accessories.BMW_CHARGING_STATION]: 1080,
    [Accessories.BMW_MAINTENANCE_PROGRAM_UPGRADE]: 1895,
    [Accessories.BMW_ONE_YEAR]: 975,
  },
  [ModelType.I8]: {
    [Accessories.BMW_LASERLIGHT]: 6300,
    [Accessories.BMW_CHARGING_STATION]: 1080,
    [Accessories.BMW_MAINTENANCE_PROGRAM_UPGRADE]: 1895,
    [Accessories.BMW_ONE_YEAR]: 975,
  },
};

export default Accessories;
