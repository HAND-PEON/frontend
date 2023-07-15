import React from 'react';
import { ApiError, extractError } from '@/lib/error';

interface GlobalErrorBoundaryProps {
  children: React.ReactNode;
}

interface State {
  shouldHandleError: boolean;
  error: ApiError;
}

const initialState: State = {
  shouldHandleError: true,
  error: null,
};

class GlobalErrorBoundary extends React.Component<
  GlobalErrorBoundaryProps,
  State
> {
  constructor(props: GlobalErrorBoundaryProps) {
    super(props);
    this.state = initialState;
  }
  static getDerivedStateFromError(error: Error): State {
    return {
      shouldHandleError: true,
      error: extractError(error),
    };
  }

  render() {
    if (this.state.error) {
      return <div>글로벌 에러!!</div>;
    }
    return this.props.children;
  }
}

export default GlobalErrorBoundary;
