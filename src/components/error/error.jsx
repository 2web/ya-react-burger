import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Ошибка!", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className={"p-10 text text_type_main-medium"}>
          <h1>Что-то пошло не так :(</h1>
          <p>Произошла ошибка.</p>
        </section>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;