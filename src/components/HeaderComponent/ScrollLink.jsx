import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = React.forwardRef(function ScrollLink(props, ref) {
  return <Link {...props} innerRef={ref} />;
});

export default ScrollLink;
