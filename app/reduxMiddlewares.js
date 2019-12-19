import {
  NOTIFICATION_TYPES,
  REQUEST,
  SUCCESS,
  FAILURE,
  GET,
  URL_SEPARATOR,
} from 'shared/constants';
import { pushNotification } from 'shared/utils/asideMessage';
import { errorsExtraction } from 'shared/utils/error-interceptors';
import { push } from 'connected-react-router';
import routes from 'shared/routes';

const isRequest = action => action.type.slice(-REQUEST.length) === REQUEST;
const isSuccess = action => action.type.slice(-SUCCESS.length) === SUCCESS;
const isFailure = action => action.type.slice(-FAILURE.length) === FAILURE;
const isGet = e => e.config.method === GET;

const extractRoot = type => {
  const splitType = type.split(URL_SEPARATOR);
  return `app/${splitType[1]}`;
};

const error400And424Handling = (store, next, action) => {
  if (action.e && isFailure(action)) {
    if (action.e.response.status === 400) {
      const arrayErrors = errorsExtraction(action.e.response.data.model);
      /* Uncomment this line to re-enable notifications for bad request errors */
      // errors.forEach(error => pushNotification(NOTIFICATION_TYPES.error, error))
      const objectErrors = action.e.response.data.model;
      next({ ...action, objectErrors, arrayErrors });
      return;
    }
    if (action.e.response.status === 424) {
      const objectErrors = {
        other: [action.e.response.data.message],
      };

      next({
        ...action,
        objectErrors,
        arrayErrors: [action.e.response.data.message],
      });
      return;
    }
  }
  next(action);
};

const error404Handling = (store, next, action) => {
  if (action.e && isFailure(action)) {
    if (action.e.response.status === 404) {
      if (isGet(action.e)) {
        store.dispatch(push(routes.FOUR_O_FOUR.path));
        next(action);
      } else {
        // const arrayErrors = ['Operation failed']
        // arrayErrors.forEach(error =>
        //   pushNotification(NOTIFICATION_TYPES.error, error),
        // )
        const objectErrors = {
          other: ['Operation failed'],
        };

        next({ ...action, objectErrors });
        return;
      }
    }
  }
  next(action);
};

const error500OrMoreHandling = (store, next, action) => {
  if (action.e && isFailure(action)) {
    if (isGet(action.e)) {
      store.dispatch(push(routes.NO_DATA.path));
      next(action);
    } else {
      const arrayErrors = errorsExtraction(action.e.response.data.model);

      next({ ...action, arrayErrors, unreachableService: true });
      return;
    }
  }
  next(action);
};

const error403Handling = (store, next, action) => {
  if (action.e && isFailure(action)) {
    if (action.e.response.status === 403) {
      if (isGet(action.e)) {
        store.dispatch(push(routes.FOUR_O_THREE.path));
        next(action);
      } else {
        const arrayErrors = [action.e.response.data.message];
        arrayErrors.forEach(error =>
          pushNotification(NOTIFICATION_TYPES.error, error),
        );
        next({ ...action, arrayErrors });
        return;
      }
    }
  }
  next(action);
};

const clearErrors = store => next => action => {
  if (isRequest(action) || isSuccess(action))
    store.dispatch({
      type: `${extractRoot(action.type)}/CLEAR_ERRORS`,
    });
  next(action);
};

const errorsHandling = store => next => action => {
  if (action.e && action.e.response && isFailure(action)) {
    // eslint-disable-next-line default-case
    switch (action.e.response.status) {
      case 424:
      case 400:
        error400And424Handling(store, next, action);
        break;
      case 403:
        error403Handling(store, next, action);
        break;
      case 404:
        error404Handling(store, next, action);
        break;
    }
    if (action.e.response.status && action.e.response.status >= 500) {
      error500OrMoreHandling(store, next, action);
    }
  } else if (isFailure(action)) {
    error500OrMoreHandling(store, next, action);
  } else {
    next(action);
  }
};

export default [errorsHandling, clearErrors];
