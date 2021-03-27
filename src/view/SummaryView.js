import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useFormikContext } from 'formik';
import { useMemo } from 'react';
import FadeContent from '../components/content/FadeContent';
import {
  I3Url, I8Url, ModelLabel, ModelType,
} from '../constants/Models';
import ColorPicker from '../components/colorPicker/ColorPicker';
import { ColorByModels, ColorLabelsByModels } from '../constants/Color';
import Price from '../constants/Price';
import thousandsNotation from '../utils/thousandsNotation';
import { AccessoriesLabel } from '../constants/Accessories';
import MediaQuerySelector from '../theme/MediaQuerySelector';

const StyledFadeContent = styled(FadeContent)`
  flex-direction: column;
  width: 100%;
  align-items: center;
  
  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    align-items: flex-start;
  }
`;

const Paragraph = styled.div`
  font-size: 18px;
  text-align: center;
  line-height: 30px;
  color: ${(p) => p.theme.GRAY};
  margin-bottom: 45px;

  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    text-align: left;
    font-size: 16px;
  }
`;

const Separator = styled.div`
  width: 32px;
  height: 2px;
  margin-bottom: 10px;
  background-color: ${(p) => p.theme.GRAY_LIGHT_VARIANT};
`;

const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${(p) => p.theme.BLACK};
  margin-bottom: 20px;

  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    font-size: 16px;
  }
`;

const Image = styled.img`
  margin: 0 auto 20px;
  max-width: 700px;
  width: 100%;
`;

const Title = styled.div`
  margin: 4px 0;
  font-size: 40px;
  font-weight: 700;
  color: ${(p) => p.theme.BLACK};

  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    font-size: 24px;
  }
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 72px;

  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    padding-bottom: 32px;
  }
`;

const ColorDescription = styled.div`
  font-size: 24px;
  margin-left: 4px;

  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    font-size: 18px;
  }
`;

const AccessoryList = styled.ul`
  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    padding-left: 16px;
  }
`;

const Item = styled.li`
  font-size: 18px;
  line-height: 28px;
  color: ${(p) => p.theme.GRAY};
  
  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    font-size: 16px;
  }
  
  ::marker{};
`;

const StyledColorPicker = styled(ColorPicker)`
  cursor: auto;
  margin: 0 8px 0 0;
  
  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    width: 36px;
    height: 36px;
  }
`;

const SummaryView = (props) => {
  const { visible } = props;
  const formik = useFormikContext();
  const { accessories, models, color } = formik.values;

  const imageUrl = useMemo(() => {
    if (!models) return undefined;
    if (models === ModelType.I3) return I3Url[color];
    return I8Url[color];
  }, [color, models]);

  return (
    <StyledFadeContent visible={visible}>
      <Separator />
      <Subtitle>MODEL</Subtitle>
      <Image src={imageUrl} />
      <Title>{ModelLabel[models]}</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Reprehenderit saepe facilis hic, unde, numquam vel.
        Blanditiis sed laboriosam ratione nulla atque molestias at
        explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate
        dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum.
      </Paragraph>
      <Separator />
      <Subtitle>COLOR</Subtitle>
      <ColorContainer>
        <StyledColorPicker color={ColorByModels?.[models]?.[color]} />
        <ColorDescription>
          {`${ColorLabelsByModels?.[models]?.[color]} - $${thousandsNotation(Price?.[models]?.COLOR?.[color])}`}
        </ColorDescription>
      </ColorContainer>
      <Separator />
      <Subtitle>ACCESSORIES</Subtitle>
      <AccessoryList>
        {accessories.map((accessory) => (
          <Item>{AccessoriesLabel[accessory]}</Item>
        ))}
        {accessories.length === 0 && (
          <Item>No accessories selected</Item>
        )}
      </AccessoryList>
    </StyledFadeContent>
  );
};

SummaryView.propTypes = {
  /** Representing if the section is showed */
  visible: PropTypes.bool,
};

SummaryView.defaultProps = {
  visible: false,
};

export default SummaryView;
