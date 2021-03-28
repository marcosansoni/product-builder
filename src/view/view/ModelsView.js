import styled from 'styled-components';
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import Card from '../../components/card/Card';
import CheckButton from '../../components/radioButton/CheckButton';
import {
  I3Url, I8Url, ModelLabel, ModelType,
} from '../../constants/Models';
import Color from '../../constants/Color';
import FadeContent from '../../components/content/FadeContent';
import MediaQuerySelector from '../../theme/MediaQuerySelector';

const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledFadeContent = styled(FadeContent)`
  ${MediaQuerySelector.SMALL} {
    flex-direction: column;
  }
`;

const StyledCard = styled(Card)`
  ${MediaQuerySelector.SMALL} {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ModelsView = (props) => {
  const { onSelect, visible, dataTest } = props;
  const formik = useFormikContext();
  const { models, color } = formik.values;

  const handleClick = (model, updatedColor) => {
    if (models === model) {
      formik.setFieldValue('models', undefined);
      formik.setFieldValue('color', undefined);
      return formik.setFieldValue('accessories', []);
    }
    formik.setFieldValue('models', model);
    formik.setFieldValue('color', updatedColor);
    return onSelect();
  };

  return (
    <StyledFadeContent visible={visible} landing={color === undefined} dataTest={`${dataTest}-models`}>
      <StyledCard
        dataTest={`${dataTest}-models-i3`}
        imageUrl={I3Url.WHITE}
        title={ModelLabel[ModelType.I3]}
        subtitle="from $42.400"
        selected={models === ModelType.I3}
        onClick={() => handleClick(ModelType.I3, Color.WHITE)}
      >
        <RadioContainer>
          <CheckButton
            dataTest={`${dataTest}-models-i3`}
            selected={models === ModelType.I3}
            onChange={() => undefined}
          />
        </RadioContainer>
      </StyledCard>
      <StyledCard
        dataTest={`${dataTest}-models-i8`}
        imageUrl={I8Url.BLACK}
        title={ModelLabel[ModelType.I8]}
        subtitle="from $140.700"
        selected={models === ModelType.I8}
        onClick={() => handleClick(ModelType.I8, Color.BLACK)}
      >
        <RadioContainer>
          <CheckButton
            dataTest={`${dataTest}-models-i8`}
            selected={models === ModelType.I8}
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
  /** If visible content is rendered, used into FadeContent */
  visible: PropTypes.bool,
  /** data-test attr */
  dataTest: PropTypes.string,
};

ModelsView.defaultProps = {
  onSelect: undefined,
  dataTest: undefined,
  visible: false,
};

export default ModelsView;
