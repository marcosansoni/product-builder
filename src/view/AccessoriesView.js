import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useFormikContext } from 'formik';
import FadeContent from '../components/content/FadeContent';
import Card from '../components/card/Card';
import CheckButton from '../components/radioButton/CheckButton';
import { AccessoriesLabel, AccessoriesPricesByModel } from '../constants/Accessories';

const StyledFadeContent = styled(FadeContent)`
  flex-direction: column;
  width: 100%;
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 35px 32px;
  font-size: 26px;
  font-weight: 700;
  color: ${(p) => p.theme.BLACK};
  margin-bottom: 24px;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Price = styled.div`
  padding-right: 40px;
`;

const AccessoriesView = (props) => {
  const { visible } = props;
  const formik = useFormikContext();
  const { accessories } = formik.values;

  const handleClickCard = (accessory) => {
    if (accessories.includes(accessory)) {
      return formik.setFieldValue('accessories', formik.values.accessories.filter((acc) => acc !== accessory));
    }
    return formik.setFieldValue('accessories', [...formik.values.accessories, accessory]);
  };

  const renderCard = (accessory) => (
    <StyledCard
      selected={accessories.includes(accessory)}
      onClick={() => handleClickCard(accessory)}
    >
      <div>{AccessoriesLabel[accessory]}</div>
      <Right>
        <Price>{`$${AccessoriesPricesByModel[formik.values.models][accessory]}`}</Price>
        <CheckButton selected={accessories.includes(accessory)} squared />
      </Right>
    </StyledCard>
  );

  return (
    <StyledFadeContent visible={visible}>
      {formik.values.models
      && Object.keys(AccessoriesPricesByModel[formik.values.models]).map(renderCard)}
    </StyledFadeContent>
  );
};

AccessoriesView.propTypes = {
  /** Representing if the section is showed */
  visible: PropTypes.bool,
};

AccessoriesView.defaultProps = {
  visible: false,
};

export default AccessoriesView;
