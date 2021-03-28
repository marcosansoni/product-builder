import { useMemo } from 'react';
import { useFormikContext } from 'formik';
import { I3Url, I8Url, ModelType } from '../constants/Models';

/**
 * [hook] Return the proper image Url according with models and color
 */
const useImageUrl = () => {
  const formik = useFormikContext();
  const { color, models } = formik.values;

  return useMemo(() => {
    if (!models) return undefined;
    if (models === ModelType.I3) return I3Url[color];
    return I8Url[color];
  }, [color, models]);
};

export default useImageUrl;
