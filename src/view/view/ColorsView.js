import styled from 'styled-components';
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import { ModelType } from '../../constants/Models';
import ColorPicker from '../../components/colorPicker/ColorPicker';
import Color, { ColorLabelsByModels, ColorPriceByModel } from '../../constants/Color';
import Palette from '../../theme/Palette';
import FadeContent from '../../components/content/FadeContent';
import thousandsNotation from '../../utils/thousandsNotation';
import MediaQuerySelector from '../../theme/MediaQuerySelector';
import useImageUrl from '../../hooks/useImageUrl';

const Car = styled.img`
  width: 100%;
  margin-bottom: 2em;
  max-width: 750px;

  ${MediaQuerySelector.SMALL_AND_MEDIUM} {
    margin: 2.5em 0 4.5em;
  }
`;

const ColorSelection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledFadeContent = styled(FadeContent)`
  flex-direction: column;
`;

const ColorsView = (props) => {
  const { visible, dataTest } = props;
  const formik = useFormikContext();
  const { models, color } = formik.values;
  const imageUrl = useImageUrl();

  return (
    <StyledFadeContent visible={visible} dataTest={`${dataTest}-colors`}>
      <Car src={imageUrl} data-test={`${dataTest}-colors-car`} />
      <ColorSelection>
        {models === ModelType.I3 && (
          <>
            <ColorPicker
              dataTest={`${dataTest}-colors-white-i3`}
              color={Palette.WHITE}
              selected={color === Color.WHITE}
              tooltip={`${ColorLabelsByModels[models][Color.WHITE]} - $${thousandsNotation(ColorPriceByModel[models][Color.WHITE])}`}
              onClick={() => formik.setFieldValue('color', Color.WHITE)}
            />
            <ColorPicker
              dataTest={`${dataTest}-colors-gray-i3`}
              color={Palette.MINERAL_GRAY}
              selected={color === Color.BLACK}
              tooltip={`${ColorLabelsByModels[models][Color.BLACK]} - $${thousandsNotation(ColorPriceByModel[models][Color.BLACK])}`}
              onClick={() => formik.setFieldValue('color', Color.BLACK)}
            />
            <ColorPicker
              dataTest={`${dataTest}-colors-orange-i3`}
              color={Palette.ORANGE_METALLIC}
              selected={color === Color.RED}
              tooltip={`${ColorLabelsByModels[models][Color.RED]} - $${thousandsNotation(ColorPriceByModel[models][Color.RED])}`}
              onClick={() => formik.setFieldValue('color', Color.RED)}
            />
          </>
        )}
        {models === ModelType.I8 && (
          <>
            <ColorPicker
              dataTest={`${dataTest}-colors-black-i8`}
              color={Palette.GREY_METALLIC}
              selected={color === Color.BLACK}
              tooltip={`${ColorLabelsByModels[models][Color.BLACK]} - $${thousandsNotation(ColorPriceByModel[models][Color.BLACK])}`}
              onClick={() => formik.setFieldValue('color', Color.BLACK)}
            />
            <ColorPicker
              dataTest={`${dataTest}-colors-white-i8`}
              color={Palette.WHITE_PERL_METALLIC}
              selected={color === Color.WHITE}
              tooltip={`${ColorLabelsByModels[models][Color.WHITE]} - $${thousandsNotation(ColorPriceByModel[models][Color.WHITE])}`}
              onClick={() => formik.setFieldValue('color', Color.WHITE)}
            />
          </>
        )}
      </ColorSelection>
    </StyledFadeContent>
  );
};

ColorsView.propTypes = {
  /** If visible content is rendered, used into FadeContent */
  visible: PropTypes.bool,
  /** data-test attr */
  dataTest: PropTypes.string,
};

ColorsView.defaultProps = {
  visible: false,
  dataTest: undefined,
};

export default ColorsView;
