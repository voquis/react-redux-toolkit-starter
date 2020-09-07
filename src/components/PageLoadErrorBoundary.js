import React from 'react';
import Notfound from '../pages/notfound';

class PageLoadErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('The requested page was not found.')
  }

  render() {
    document.title = "Not Found"
    if (this.state.hasError) {
      return (
        <Notfound />
      );
    }
    return this.props.children;
  }
}

export default PageLoadErrorBoundary