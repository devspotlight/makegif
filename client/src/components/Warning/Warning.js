import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Button from '../Button';
import './Warning.css';

const Warning = ({
  title,
  message,
  content,
  ctaLabel,
  ctaOnClick,
  ctaIcon,
  ctaDisabled,
  warningIcon,
}) => (
  <div className="gif-warning column">
    <Icon name={warningIcon} size={4} />
    <h1>{title}</h1>
    <p>{message}</p>
    {content}
    <Button
      disabled={ctaDisabled}
      icon={ctaIcon}
      onClick={ctaOnClick}
      secondary
      grey
    >
      {ctaLabel}
    </Button>
  </div>
);

Warning.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  content: PropTypes.node,
  ctaLabel: PropTypes.string,
  ctaOnClick: PropTypes.func,
  ctaIcon: PropTypes.string,
  ctaDisabled: PropTypes.bool,
  warningIcon: PropTypes.string,
};

Warning.defaultProps = {
  content: null,
  ctaLabel: null,
  ctaOnClick: null,
  ctaIcon: null,
  ctaDisabled: false,
  warningIcon: 'exclamation-triangle',
};

export default Warning;
