import React from "react";

interface IItem {
  id: number;
  name: string;
}

interface IState {
  items: IItem[];
}

const Item: React.FunctionComponent<
  React.LiHTMLAttributes<HTMLLIElement>
> = React.memo(props => <li {...props} />);

class List extends React.PureComponent<{}, IState> {
  private intervalId = 0;

  public state: IState = {
    items: []
  };

  public componentDidMount() {
    this.intervalId = window.setInterval(this.iterate, 100);
  }

  public componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  private iterate = () => {
    this.setState(({ items }) => {
      if (items.length < 20) {
        const n = items.length;
        return { items: [...items, { id: n, name: n.toString() }] };
      } else {
        return { items: items.slice(1).concat(items[0]) };
      }
    });
  };

  public render() {
    return (
      <ul>
        {this.state.items.map(item => (
          <Item key={item.id}>{item.name}</Item>
        ))}
      </ul>
    );
  }
}

export default List;
