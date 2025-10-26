import type { IProps } from '@/types/types';


function Component(props: IProps) {
  return <div>Component {props.name} is {props.age} years old.
    {props.data.map(item => {
      return <div key={item.id}>Data {item.id}: {item.value}</div>;
    })}
  </div>;
}

export default Component;
