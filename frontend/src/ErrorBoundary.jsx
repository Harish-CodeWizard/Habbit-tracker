import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    // optionally send to logging service
    // console.error(error, info);
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div style={{padding:20}}>
          <h1 style={{color:'red'}}>Runtime error</h1>
          <pre>{error && error.toString()}</pre>
          <details style={{whiteSpace:'pre-wrap'}}>{this.state.info?.componentStack}</details>
        </div>
      );
    }
    return this.props.children;
  }
}
