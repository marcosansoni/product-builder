import styled from 'styled-components';
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import Card from '../components/card/Card';
import CheckButton from '../components/radioButton/CheckButton';
import { I3Url, I8Url, ModelType } from '../constants/Models';
import Color from '../constants/Color';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  padding-bottom: 2.7em;
  height: fit-content;
  height: -moz-fit-content;    /* Firefox/Gecko */
  height: -webkit-fit-content;
`;

const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Models = (props) => {
  const { onSelect } = props;
  const formik = useFormikContext();

  const handleClick = (model, color) => {
    if (formik.values.models === model) {
      formik.setFieldValue('models', undefined);
      return formik.setFieldValue('color', undefined);
    }
    formik.setFieldValue('models', model);
    formik.setFieldValue('color', color);
    return onSelect();
  };

  return (
    <CardContainer>
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
    </CardContainer>
  );
};

Models.propTypes = {
  /** Callback used when we select a model */
  onSelect: PropTypes.func,
};

Models.defaultProps = {
  onSelect: undefined,
};

export default Models;
