import styled from 'styled-components';
import { useFormikContext } from 'formik';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { I3Url, I8Url, ModelType } from '../constants/Models';
import ColorPicker from '../components/colorPicker/ColorPicker';
import Color from '../constants/Color';
import Palette from '../theme/Palette';
import FadeContent from '../components/content/FadeContent';

// const enter = keyframes`
//   from{
//     opacity: 0;
//     //display: none;
//     transform: translateX(10px);
//   }
//   to{
//     opacity: 1;
//     display: flex;
//     transform: translateX(0px);
//   }
// `;
//
// const exit = keyframes`
//   to{
//     opacity: 0;
//     transform: translateX(-10px);
//   }
//   from{
//     opacity: 1;
//     transform: translateX(0px);
//   }
// `;

// const CardContainer = styled.div`
//   //display: none;
//   position: absolute;
//   opacity: 0;
//   flex-direction: column;
//   justify-content: space-between;
//   max-width: 1000px;
//   padding-bottom: 2.7em;
//   height: fit-content;
//   height: -moz-fit-content;    /* Firefox/Gecko */
//   height: -webkit-fit-content;
//   transition: opacity 0.3s ease-in;
//   animation: ${(p) => (p.visible ? css`${enter} 1s eas
//  e-in 1s forwards` : css`${exit} 1s ease-in forwards`)};
// `;

const Car = styled.img`
  width: 100%;
  margin-bottom: 2em;
  max-width: 750px;
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
              tooltip="White - $0"
              onClick={() => formik.setFieldValue('color', Color.WHITE)}
            />
            <ColorPicker
              color={Palette.MINERAL_GRAY}
              selected={formik.values.color === Color.BLACK}
              tooltip="Mineral Grey - $550"
              onClick={() => formik.setFieldValue('color', Color.BLACK)}
            />
            <ColorPicker
              color={Palette.ORANGE_METALLIC}
              selected={formik.values.color === Color.RED}
              tooltip="Orange Metallic - $550"
              onClick={() => formik.setFieldValue('color', Color.RED)}
            />
          </>
        )}
        {formik.values.models === ModelType.I8 && (
          <>
            <ColorPicker
              color={Palette.GREY_METALLIC}
              selected={formik.values.color === Color.BLACK}
              tooltip="Grey Metallic - $0"
              onClick={() => formik.setFieldValue('color', Color.BLACK)}
            />
            <ColorPicker
              color={Palette.WHITE_PERL_METALLIC}
              selected={formik.values.color === Color.WHITE}
              tooltip="White Perl Metallic - $1.800"
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
