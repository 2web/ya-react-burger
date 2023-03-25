import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps | Readonly<ErrorBoundaryProps>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.log("Ошибка!", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className={"p-10 text text_type_main-medium"}>
          <h1>Что-то пошло не так :(</h1>
          <p>Произошла скриптовая ошибка.</p>
        </section>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
