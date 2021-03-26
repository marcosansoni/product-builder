import styled from 'styled-components';
import { useFormikContext } from 'formik';
import { useMemo } from 'react';
import { I3Url, I8Url, ModelType } from '../constants/Models';
import ColorPicker from '../components/colorPicker/ColorPicker';
import Color from '../constants/Color';
import Palette from '../theme/Palette';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1000px;
  padding-bottom: 2.7em;
  height: fit-content;
  height: -moz-fit-content;    /* Firefox/Gecko */
  height: -webkit-fit-content;
`;

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

const Colors = () => {
  const formik = useFormikContext();

  const imageUrl = useMemo(() => {
    if (!formik.values.models) return undefined;
    if (formik.values.models === ModelType.I3) return I3Url[formik.values.color];
    return I8Url[formik.values.color];
  }, [formik.values.color, formik.values.models]);

  return (
    <CardContainer>
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
              color="#303539"
              selected={formik.values.color === Color.BLACK}
              tooltip="Mineral Grey - $550"
              onClick={() => formik.setFieldValue('color', Color.BLACK)}
            />
            <ColorPicker
              color="#cf5a16"
              selected={formik.values.color === Color.RED}
              tooltip="Orange Metallic - $550"
              onClick={() => formik.setFieldValue('color', Color.RED)}
            />
          </>
        )}
      </ColorSelection>
      {/* <Card */}
      {/*  imageUrl={I3Url.WHITE} */}
      {/*  title="BMW i3" */}
      {/*  subtitle="from $42.400" */}
      {/*  selected={formik.values.models === ModelType.I3} */}
      {/*  onClick={() => handleClick(ModelType.I3)} */}
      {/* > */}
      {/*  <RadioContainer> */}
      {/*    <CheckButton */}
      {/*      selected={formik.values.models === ModelType.I3} */}
      {/*      onChange={() => undefined} */}
      {/*    /> */}
      {/*  </RadioContainer> */}
      {/* </Card> */}
      {/* <Card */}
      {/*  imageUrl={I8Url.BLACK} */}
      {/*  title="BMW i8" */}
      {/*  subtitle="from $140.700" */}
      {/*  selected={formik.values.models === ModelType.I8} */}
      {/*  onClick={() => handleClick(ModelType.I8)} */}
      {/* > */}
      {/*  <RadioContainer> */}
      {/*    <CheckButton */}
      {/*      selected={formik.values.models === ModelType.I8} */}
      {/*      onChange={() => undefined} */}
      {/*    /> */}
      {/*  </RadioContainer> */}
      {/* </Card> */}
    </CardContainer>
  );
};

export default Colors;
