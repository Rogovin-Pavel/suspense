import { getAbout } from '../../api';

export const setAboutInfo = () => {
  return async (dispatch) => {
    let about;

    try {
      const response = await getAbout();

      response.forEach((doc) => {
        about = Object.values(doc.data());
      });

      dispatch({
        type: 'SET_ABOUT_INFO',
        payload: about,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
