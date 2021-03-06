import { ModelType } from './Models';
import Palette from '../theme/Palette';

const Color = {
  BLACK: 'BLACK',
  RED: 'RED',
  WHITE: 'WHITE',
};

export const ColorByModels = {
  [ModelType.I3]: {
    [Color.WHITE]: Palette.WHITE,
    [Color.BLACK]: Palette.MINERAL_GRAY,
    [Color.RED]: Palette.ORANGE_METALLIC,
  },
  [ModelType.I8]: {
    [Color.BLACK]: Palette.GREY_METALLIC,
    [Color.WHITE]: Palette.WHITE_PERL_METALLIC,
  },
};

export const ColorLabelsByModels = {
  [ModelType.I3]: {
    [Color.WHITE]: 'White',
    [Color.BLACK]: 'Mineral grey',
    [Color.RED]: 'Orange metallic',
  },
  [ModelType.I8]: {
    [Color.BLACK]: 'Grey metallic',
    [Color.WHITE]: 'White perl metallic',
  },
};

export const ColorPriceByModel = {
  [ModelType.I3]: {
    [Color.WHITE]: 0,
    [Color.RED]: 550,
    [Color.BLACK]: 550,
  },
  [ModelType.I8]: {
    [Color.WHITE]: 1800,
    [Color.BLACK]: 0,
  },
};

export default Color;
