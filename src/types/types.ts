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

export interface IPost {
  "id": string,
  "category": "sport" | "style" | "lifeStyle" | "travel",
  "title": string,
  "views": number,
  "date": string,
  "author": string,
  "description": string,
  "image": string
}

