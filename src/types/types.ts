interface IState {
  id: number;
  value: string;
}

export interface IProps {
  name: string;
  age: number;
  hello?: () => void;
  data: IState[];
}