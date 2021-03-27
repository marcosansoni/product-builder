import Color from './Color';
import { ModelType } from './Models';

const Price = {
  [ModelType.I3]: {
    DEFAULT: 42400,
    COLOR: {
      [Color.WHITE]: 0,
      [Color.RED]: 550,
      [Color.BLACK]: 550,
    },
  },
  [ModelType.I8]: {
    DEFAULT: 140700,
    COLOR: {
      [Color.WHITE]: 1800,
      [Color.BLACK]: 0,
    },
  },
};

export default Price;
