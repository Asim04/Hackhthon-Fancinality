declare module 'react-hot-toast' {
  export interface ToastOptions {
    style?: React.CSSProperties;
    className?: string;
    duration?: number;
    // Add other possible options
  }

  export interface Toast {
    (message: string | React.ReactNode, options?: ToastOptions): void;
    success: (message: string | React.ReactNode, options?: ToastOptions) => void;
    error: (message: string | React.ReactNode, options?: ToastOptions) => void;
    loading: (message: string | React.ReactNode, options?: ToastOptions) => void;
  }

  export const toast: Toast;
  export function Toaster(props: any): React.ReactElement;
}
