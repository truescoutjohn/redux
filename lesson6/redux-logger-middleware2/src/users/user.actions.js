export const SHOW_SPINNER = 'SPINNER/SHOW';
export const USER_DATA_RECEIVED = 'USER/RECEIVED';

export const showSpinner = () => ({ type: SHOW_SPINNER });
export const userDataReceived = userData => ({ type: USER_DATA_RECEIVED, payload: { userData } });
