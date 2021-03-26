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
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 70px 5% 40px;
  position: relative;
`;

const initialValues = {
  models: undefined,
  color: undefined,
  // name: partner?.name,
  // territoryId: partner?.territoryId,
  // logoUrl: undefined,
  // commitmentReliability: partner?.commitmentReliability,
  // enabled: partner?.enabled,
};

const validationSchema = Yup.object().shape({
  models: Yup.string().required(),
  color: Yup.string().required(),
  // name: Yup.string().required('Required'),
  // territoryId: Yup.number().required('Required'),
  // logoUrl: Yup.mixed().test(
  //   'logoUrl',
  //   t('partners.errorValidImage'),
  //   val => isEmpty(val) || (isObject(val) && val.mimeType === 'image/png'),
  // ),
  // commitmentReliability: Yup.string(),
  // enabled: Yup.boolean(),
});

const Form = () => {
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handlePrimaryClick = (models) => {
    console.log(models);
    if (models === undefined) { // disabled
      console.log('here');
      return setOpenSnackbar(true);
    }
    return setSelectedPageIndex(selectedPageIndex + 1);
  };

  // const renderPage = () => {
  //   switch (selectedPageIndex) {
  //     case 0:
  //       return (<ModelsView onSelect={() => setOpenSnackbar(false)} />);
  //     case 1:
  //       return (<ColorsView />);
  //     default:
  //       return null;
  //   }
  // };

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
        onSubmit={() => {
        }}
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
              <Content>
                <ModelsView
                  onSelect={() => setOpenSnackbar(false)}
                  visible={selectedPageIndex === 0}
                />
                <ColorsView
                  visible={selectedPageIndex === 1}
                />
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
