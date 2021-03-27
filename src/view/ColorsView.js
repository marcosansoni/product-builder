import styled from 'styled-components';
import { useFormikContext } from 'formik';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { I3Url, I8Url, ModelType } from '../constants/Models';
import ColorPicker from '../components/colorPicker/ColorPicker';
import Color, { ColorLabelsByModels } from '../constants/Color';
import Palette from '../theme/Palette';
import FadeContent from '../components/content/FadeContent';
import Price from '../constants/Price';
import thousandsNotation from '../utils/thousandsNotation';
import MediaQuerySelector from '../theme/MediaQuerySelector';

const Car = styled.img`
  width: 100%;
  margin-bottom: 2em;
  max-width: 750px;
  
  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
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
  const { visible } = props;
  const formik = useFormikContext();

  const imageUrl = useMemo(() => {
    if (!formik.values.models) return undefined;
    if (formik.values.models === ModelType.I3) return I3Url[formik.values.color];
    return I8Url[formik.values.color];
  }, [formik.values.color, formik.values.models]);

  return (
    <StyledFadeContent visible={visible}>
      <Car src={imageUrl} />
      <ColorSelection>
        {formik.values.models === ModelType.I3 && (
          <>
            <ColorPicker
              color={Palette.WHITE}
              selected={formik.values.color === Color.WHITE}
              tooltip={`${ColorLabelsByModels[formik.values.models][Color.WHITE]} - $${thousandsNotation(Price[formik.values.models].COLOR[Color.WHITE])}`}
              onClick={() => formik.setFieldValue('color', Color.WHITE)}
            />
            <ColorPicker
              color={Palette.MINERAL_GRAY}
              selected={formik.values.color === Color.BLACK}
              tooltip={`${ColorLabelsByModels[formik.values.models][Color.BLACK]} - $${thousandsNotation(Price[formik.values.models].COLOR[Color.BLACK])}`}
              onClick={() => formik.setFieldValue('color', Color.BLACK)}
            />
            <ColorPicker
              color={Palette.ORANGE_METALLIC}
              selected={formik.values.color === Color.RED}
              tooltip={`${ColorLabelsByModels[formik.values.models][Color.RED]} - $${thousandsNotation(Price[formik.values.models].COLOR[Color.RED])}`}
              onClick={() => formik.setFieldValue('color', Color.RED)}
            />
          </>
        )}
        {formik.values.models === ModelType.I8 && (
          <>
            <ColorPicker
              color={Palette.GREY_METALLIC}
              selected={formik.values.color === Color.BLACK}
              tooltip={`${ColorLabelsByModels[formik.values.models][Color.BLACK]} - $${thousandsNotation(Price[formik.values.models].COLOR[Color.BLACK])}`}
              onClick={() => formik.setFieldValue('color', Color.BLACK)}
            />
            <ColorPicker
              color={Palette.WHITE_PERL_METALLIC}
              selected={formik.values.color === Color.WHITE}
              tooltip={`${ColorLabelsByModels[formik.values.models][Color.WHITE]} - $${thousandsNotation(Price[formik.values.models].COLOR[Color.WHITE])}`}
              onClick={() => formik.setFieldValue('color', Color.WHITE)}
            />
          </>
        )}
      </ColorSelection>
    </StyledFadeContent>
  );
};

ColorsView.propTypes = {
  visible: PropTypes.bool,
};

ColorsView.defaultProps = {
  visible: false,
};

export default ColorsView;
