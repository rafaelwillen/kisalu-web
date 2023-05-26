export type ProgressBarProps = {
  progress?: number;
  max?: number;
};

export type LoadingStateProps = {
  message?: string;
};

export type ErrorStateProps = {
  message?: string;
};

export type EmptyStateProps = {
  heading: string;
  message?: string;
};