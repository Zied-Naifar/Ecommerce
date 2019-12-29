import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={() => {
            console.log('zied');
            onClose();
          }}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function CustomizedSnackbars({ type, message }) {
  // console.log('message: ', message);
  // console.log('type: ', type);
  const classes = useStyles2();
  const [open, setOpen] = React.useState(true);
  console.log('open: ', open);

  const handleClose = () => {
    // if (reason === 'clickaway') {
    //   return;
    // }
    console.log('object');
    setOpen(false);
  };

  const renderNotification = () => {
    switch (type) {
      case 'error':
        setOpen(true);
        return (
          <MySnackbarContentWrapper
            variant="error"
            className={classes.margin}
            message={message}
            onClose={() => handleClose()}
          />
        );
      case 'warning':
        return (
          <MySnackbarContentWrapper
            variant="warning"
            className={classes.margin}
            onClose={() => handleClose()}
            message={message}
          />
        );
      case 'information':
        return (
          <MySnackbarContentWrapper
            variant="info"
            className={classes.margin}
            message={message}
            onClose={() => handleClose()}
          />
        );
      case 'success':
        return (
          <MySnackbarContentWrapper
            variant="success"
            className={classes.margin}
            message={message}
            onClose={() => handleClose()}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={() => handleClose()}
      >
        {renderNotification()}
      </Snackbar>
    </div>
  );
}

CustomizedSnackbars.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

export default CustomizedSnackbars;
