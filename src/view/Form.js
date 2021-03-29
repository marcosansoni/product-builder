/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Snackbar } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import Tabs from '../components/tab/Tabs';
import Footer from './footer/Footer';
import ModelsView from './view/ModelsView';
import ColorsView from './view/ColorsView';
import MediaQuerySelector from '../theme/MediaQuerySelector';
import AccessoriesView from './view/AccessoriesView';
import SummaryView from './view/SummaryView';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.div`
  padding: 0 5%;
  font-size: 48px;
  margin: 1.1em auto .76em;
  font-weight: 700;
  color: ${(p) => p.theme.BLACK};
  width: 100%;
  text-align: center;

  ${MediaQuerySelector.EXTRA_LARGE} {
    font-size: 38px;
  }

  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    display: none;
  }
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 70px 5% 40px;
  position: relative;
  
  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    padding-top: 0;
  }
`;

const MobileTitleContainer = styled.div`
  padding: 1.8em 5% 2em;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  
  ${MediaQuerySelector.LARGE}{
    display: none;
  }
  
  ${MediaQuerySelector.SMALL}{
    padding: 1.8em 5% 1em;
  }
`;

const MobileTitle = styled.div`
  font-size: 40px;
  color: ${(p) => p.theme.BLACK};
  
  ${MediaQuerySelector.SMALL}{
    font-size: 24px;
  }
`;

const StepIndicator = styled.div`
  font-size: 20px;
  color: ${(p) => p.theme.GRAY};

  ${MediaQuerySelector.SMALL}{
    font-size: 16px;
  }
`;

const StyledSnackbar = styled(Snackbar)`
  .MuiSnackbarContent-message{
    font-size: 16px;
  }
`;

const initialValues = {
  models: undefined,
  color: undefined,
  accessories: [],
};

const validationSchema = Yup.object().shape({
  models: Yup.string().required(),
  color: Yup.string().required(),
  accessories: Yup.array(),
});

const dataTest = 'form';

const Form = () => {
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handlePrimaryClick = (models) => {
    if (!models) return setOpenSnackbar(true);
    return setSelectedPageIndex(Math.min(selectedPageIndex + 1, 3));
  };

  return (
    <>
      <StyledSnackbar
        className="snackbar"
        open={openSnackbar}
        TransitionComponent={(p) => (<Slide {...p} direction="up" />)}
        message="Please, select a model first!"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => undefined}
      >
        {(formik) => (
          <>
            <Container>
              <Title data-test={`${dataTest}-title`}>Product Builder</Title>
              <Tabs
                dataTest={dataTest}
                tabs={['MODELS', 'COLORS', 'ACCESSORIES', 'SUMMARY']}
                defaultSelected={selectedPageIndex}
                disabled={!formik.values.models}
                onDisableClick={() => {
                  if (!openSnackbar) {
                    setOpenSnackbar(true);
                  }
                }}
                onSelect={(index) => setSelectedPageIndex(index)}
              />
              <MobileTitleContainer>
                <MobileTitle data-test={`${dataTest}-title-mobile`}>
                  {selectedPageIndex === 0 && 'Select Model'}
                  {selectedPageIndex === 1 && 'Select Color'}
                  {selectedPageIndex === 2 && 'Accessories'}
                  {selectedPageIndex === 3 && 'Summary'}
                </MobileTitle>
                <StepIndicator data-test={`${dataTest}-steps-mobile`}>
                  {`Step ${selectedPageIndex + 1} of 4`}
                </StepIndicator>
              </MobileTitleContainer>
              <Content>
                <ModelsView
                  dataTest={dataTest}
                  onSelect={() => setOpenSnackbar(false)}
                  visible={selectedPageIndex === 0}
                />
                <ColorsView visible={selectedPageIndex === 1} dataTest={dataTest} />
                <AccessoriesView visible={selectedPageIndex === 2} dataTest={dataTest} />
                <SummaryView visible={selectedPageIndex === 3} dataTest={dataTest} />
              </Content>
              <Footer
                dataTest={dataTest}
                step={selectedPageIndex}
                onConfirm={() => handlePrimaryClick(formik.values.models)}
                primaryDisabled={formik.values.models === undefined}
                onSecondary={() => setSelectedPageIndex(selectedPageIndex - 1)}
              />
            </Container>
          </>
        )}
      </Formik>
    </>
  );
};

export default Form;
