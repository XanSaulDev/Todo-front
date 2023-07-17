export interface RoutesInterfaceNav{
  path: string;
  Component: () => JSX.Element;
  to: string;
  name: string;
  className?: string;
}


export interface GlobalContextInterface{
  isLoading: boolean;
  setIsLoading:React.Dispatch<React.SetStateAction<boolean>>;
}