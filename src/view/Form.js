/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Snackbar } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import Tabs from '../components/tab/Tabs';
import Footer from '../components/footer/Footer';
import ModelsView from './ModelsView';
import ColorsView from './ColorsView';
import MediaQuerySelector from '../theme/MediaQuerySelector';
import AccessoriesView from './AccessoriesView';
import SummaryView from './SummaryView';

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

  ${MediaQuerySelector.BELOW_1480} {
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
    padding: 1.8em 5% 1em;
    display: none;
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

const Form = () => {
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handlePrimaryClick = (models) => {
    if (!models) return setOpenSnackbar(true);
    return setSelectedPageIndex(Math.min(selectedPageIndex + 1, 3));
  };

  return (
    <>
      <Snackbar
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
              <Title>Product Builder</Title>
              <Tabs
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
                <MobileTitle>Select Model</MobileTitle>
                <StepIndicator>{`Step ${selectedPageIndex + 1} of 4`}</StepIndicator>
              </MobileTitleContainer>
              <Content>
                <ModelsView
                  onSelect={() => setOpenSnackbar(false)}
                  visible={selectedPageIndex === 0}
                />
                <ColorsView visible={selectedPageIndex === 1} />
                <AccessoriesView visible={selectedPageIndex === 2} />
                <SummaryView visible={selectedPageIndex === 3} />
              </Content>
              <Footer
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
