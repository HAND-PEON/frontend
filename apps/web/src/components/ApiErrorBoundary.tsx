import React from 'react';
import { ApiError, extractError } from '@/lib/error';

interface ApiErrorBoundaryProps {
  message?: string;
  children: React.ReactNode;
  onReset?: () => void;
}

interface State {
  shouldHandleError: boolean;
  shouldRethrow: boolean;
  error: ApiError;
}

const initialState: State = {
  shouldHandleError: true,
  shouldRethrow: false,
  error: null,
};

class ApiErrorBoundary extends React.Component<ApiErrorBoundaryProps, State> {
  constructor(props: ApiErrorBoundaryProps) {
    super(props);
    this.state = initialState;
  }

  // 하위 트리에서 throw된 error를 받습니다.
  // 이 에러는 핸드편 웹에서 사용되는 에러 코드 정보를 담고 있습니다.
  static getDerivedStateFromError(error: any): State {
    const apiError = extractError(error);
    // ApiErrorBoundary에서 처리할 수 없는 에러 코드
    // 예) 네크워크 에러나 서버 점검 에러 등...
    if (apiError.status === 404) {
      return {
        shouldHandleError: false,
        // 여기서 처리 할 수 없는 에러라면 render 단계에서 rethrow 하여 상위 에러 바운더리에서 처리하도록 합니다.
        shouldRethrow: true,
        error: apiError,
      };
    }
    return {
      shouldHandleError: true,
      shouldRethrow: false,
      error: extractError(error),
    };
  }

  resetErrorBoundary() {
    const { error } = this.state;

    if (error !== null) {
      this.props.onReset?.();
      this.setState(initialState);
    }
  }

  render() {
    // 상위 에러 바운더리로 전파
    if (this.state.shouldRethrow) {
      throw this.state.error;
    }

    if (!this.state.shouldHandleError) {
      return this.props.children;
    }

    // https://fe-developers.kakaoent.com/2022/221110-error-boundary/
    if (this.state?.error?.status === 403) {
      return (
        <div onClick={() => this.resetErrorBoundary()}>
          에러가 발생했습니다!
        </div>
      );
    }

    //... if(statue === ??)

    return this.props.children;
  }
}

export default ApiErrorBoundary;
