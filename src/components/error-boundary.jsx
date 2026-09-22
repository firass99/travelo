import React from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Swap for your logging service (Sentry, LogRocket, etc.)
    console.error("ErrorBoundary caught:", error, info.componentStack);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    this.props.onReset?.();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return typeof this.props.fallback === "function"
          ? this.props.fallback(this.state.error, this.handleReset)
          : this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center text-center gap-3 rounded-2xl border border-border bg-card px-6 py-12">
          <AlertTriangle className="h-8 w-8 text-accent" />
          <p className="font-heading text-lg">Something didn't load right</p>
          <p className="text-sm text-muted-foreground max-w-sm">
            {this.props.message ||
              "This part of the page hit a snag. Try again, or refresh if it keeps happening."}
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-1"
            onClick={this.handleReset}
          >
            Try again
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
