import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useFormikContext } from 'formik';
import FadeContent from '../../components/content/FadeContent';
import Card from '../../components/card/Card';
import CheckButton from '../../components/radioButton/CheckButton';
import { AccessoriesLabel, AccessoriesPricesByModel } from '../../constants/Accessories';
import MediaQuerySelector from '../../theme/MediaQuerySelector';

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
  
  ${MediaQuerySelector.MEDIUM}{
    padding: 32px 24px;
    font-size: 22px;
  }
  
  ${MediaQuerySelector.SMALL}{
    flex-direction: column;
    justify-content: center;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${MediaQuerySelector.SMALL}{
    flex-direction: column;
    justify-content: center;
  }
`;

const Price = styled.div`
  padding-right: 40px;
  
  ${MediaQuerySelector.SMALL}{
    font-size: 16px;
    margin: 1.2em auto;
    color: ${(p) => p.theme.GRAY};
    padding: 0;
  }
`;

const Label = styled.div`
  ${MediaQuerySelector.SMALL}{
    font-size: 18px;
    text-align: center;
  }
`;

const AccessoriesView = (props) => {
  const { visible, dataTest } = props;
  const formik = useFormikContext();
  const { accessories, models } = formik.values;

  const handleClickCard = (accessory) => {
    if (accessories.includes(accessory)) {
      return formik.setFieldValue('accessories', accessories.filter((acc) => acc !== accessory));
    }
    return formik.setFieldValue('accessories', [...accessories, accessory]);
  };

  const renderCard = (accessory) => (
    <StyledCard
      dataTest={`${dataTest}-accessories-${accessory}`}
      selected={accessories.includes(accessory)}
      onClick={() => handleClickCard(accessory)}
    >
      <Label dataTest={`${dataTest}-accessories-${accessory}-label`}>
        {AccessoriesLabel[accessory]}
      </Label>
      <Right>
        <Price dataTest={`${dataTest}-accessories-${accessory}-price`}>
          {`$${AccessoriesPricesByModel[models][accessory]}`}
        </Price>
        <CheckButton
          dataTest={`${dataTest}-accessories-${accessory}`}
          selected={accessories.includes(accessory)}
          squared
        />
      </Right>
    </StyledCard>
  );

  return (
    <StyledFadeContent visible={visible} dataTest={`${dataTest}-accessories`}>
      {models && Object.keys(AccessoriesPricesByModel[models]).map(renderCard)}
    </StyledFadeContent>
  );
};

AccessoriesView.propTypes = {
  /** If visible content is rendered, used into FadeContent */
  visible: PropTypes.bool,
  /** data-test attr */
  dataTest: PropTypes.string,
};

AccessoriesView.defaultProps = {
  visible: false,
  dataTest: undefined,
};

export default AccessoriesView;
