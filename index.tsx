
import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
          <h1 className="text-red-600 text-6xl font-bold mb-4">CRITICAL ERROR</h1>
          <p className="text-white text-xl text-center max-w-lg mb-4">
            The application crashed. This might be due to a browser incompatibility or network restriction.
          </p>
          <div className="bg-gray-900 p-4 rounded text-red-400 font-mono text-sm overflow-auto max-w-full">
            {this.state.error?.toString()}
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="mt-8 px-6 py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors"
          >
            RELOAD PAGE
          </button>
        </div>
      );
    }

    // Fix: In React class components, props are accessed via this.props
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
