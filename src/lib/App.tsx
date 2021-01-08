import React, { Component } from 'react';
import PubSub from '../utils/PubSub';

type AppState = {
  logs: Array<React.ReactNode>;
};

interface MyConsole {
  type: string;
  args: Array<any>;
}

export default class App extends Component<{}, AppState> {
  constructor(props: any){
    super(props)
    this.state={
      logs: []
    }
  }

  createComponent(data: MyConsole){
    return(
      <div>{data.type}</div>
    )
  }

  consoleHandler(data: MyConsole) {
    console.log({data})
    const newComponent = this.createComponent(data);
    this.setState((prevState) => ({
      logs: [...prevState.logs, newComponent],
    }));
  }

  componentDidMount() {
    console.log('Mounted')
    PubSub.subscribe('CONSOLE', (data: MyConsole) =>
      this.consoleHandler(data)
    );
  }
  // render will know everything!
  render() {
    const { logs } = this.state
    return(
      <div>
        { logs }
      </div>
    );
  }
}
