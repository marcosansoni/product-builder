import styled from 'styled-components';
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import Card from '../components/card/Card';
import CheckButton from '../components/radioButton/CheckButton';
import { I3Url, I8Url, ModelType } from '../constants/Models';
import Color from '../constants/Color';
import FadeContent from '../components/content/FadeContent';
import MediaQuerySelector from '../theme/MediaQuerySelector';

const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledFadeContent = styled(FadeContent)`
  ${MediaQuerySelector.SMALL}{
    flex-direction: column;
  }
`;

const StyledCard = styled(Card)`
  ${MediaQuerySelector.SMALL}{
    width: 100%;
    margin-bottom: 20px;
  }
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
    <StyledFadeContent visible={visible} landing={formik.values.color === undefined}>
      <StyledCard
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
      </StyledCard>
      <StyledCard
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
      </StyledCard>
    </StyledFadeContent>
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
