import { useFormikContext } from 'formik';
import { useMemo } from 'react';
import { PriceByModel } from '../constants/Models';
import { ColorPriceByModel } from '../constants/Color';
import { AccessoriesPricesByModel } from '../constants/Accessories';

/**
 * [hook] Return the proper price  according with models, color and accessories selected
 */
const usePrice = () => {
  const formik = useFormikContext();
  const { color, models, accessories } = formik.values;

  return useMemo(() => {
    if (!models) return 0;
    let result = PriceByModel[models];
    if (color) {
      result += ColorPriceByModel[models][color];
    }
    accessories.forEach((accessory) => {
      result += AccessoriesPricesByModel[models][accessory];
    });
    return result;
  }, [color, models, accessories]);
};

export default usePrice;
