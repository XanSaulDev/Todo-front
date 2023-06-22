export interface RoutesInterfaceNav{
  path: string;
  Component: () => JSX.Element;
  to: string;
  name: string;
  className?: string;
}
