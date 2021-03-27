import styled from 'styled-components';
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import Card from '../components/card/Card';
import CheckButton from '../components/radioButton/CheckButton';
import { I3Url, I8Url, ModelType } from '../constants/Models';
import Color from '../constants/Color';
import FadeContent from '../components/content/FadeContent';

// const enter = keyframes`
//   from{
//     opacity: 0;
//     transform: translateX(10px);
//   }
//   to{
//     opacity: 1;
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
//
// const animation = (visible, firstTime) => {
//   if (!visible) {
//     return css`animation: ${exit} 1s ease-in forwards`;
//   }
//   if (firstTime) {
//     return css`animation: ${enter} 1s ease-in forwards`;
//   }
//   return css`animation: ${enter} 1s ease-in 1s forwards`;
// };
//
// const Container = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   overflow: auto;
// `;
//
// const CardContainer = styled.div`
//   display: flex;
//   opacity: 0;
//   justify-content: space-between;
//   max-width: 1000px;
//   padding: 70px 0 40px;
//   height: fit-content;
//   height: -moz-fit-content;    /* Firefox/Gecko */
//   height: -webkit-fit-content;
//   transition: opacity 0.3s ease-in;
//   ${(p) => animation(p.visible, p.firstTime)};
// `;

const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ModelsView = (props) => {
  const { onSelect, visible } = props;
  const formik = useFormikContext();

  const handleClick = (model, color) => {
    if (formik.values.models === model) {
      formik.setFieldValue('models', undefined);
      formik.setFieldValue('color', undefined);
      return formik.setFieldValue('accessories', []);
    }
    formik.setFieldValue('models', model);
    formik.setFieldValue('color', color);
    return onSelect();
  };

  return (
    <FadeContent visible={visible} landing={formik.values.color === undefined}>
      <Card
        imageUrl={I3Url.WHITE}
        title="BMW i3"
        subtitle="from $42.400"
        selected={formik.values.models === ModelType.I3}
        onClick={() => handleClick(ModelType.I3, Color.WHITE)}
      >
        <RadioContainer>
          <CheckButton
            selected={formik.values.models === ModelType.I3}
            onChange={() => undefined}
          />
        </RadioContainer>
      </Card>
      <Card
        imageUrl={I8Url.BLACK}
        title="BMW i8"
        subtitle="from $140.700"
        selected={formik.values.models === ModelType.I8}
        onClick={() => handleClick(ModelType.I8, Color.BLACK)}
      >
        <RadioContainer>
          <CheckButton
            selected={formik.values.models === ModelType.I8}
            onChange={() => undefined}
          />
        </RadioContainer>
      </Card>
    </FadeContent>
  );
};

ModelsView.propTypes = {
  /** Callback used when we select a model */
  onSelect: PropTypes.func,
  visible: PropTypes.bool,
};

ModelsView.defaultProps = {
  onSelect: undefined,
  visible: false,
};

export default ModelsView;
