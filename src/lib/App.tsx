import React, { Component } from 'react';

type AppProps = {
  pubsub: any
}
type AppState = {
  logs: Array<React.ReactNode>;
};

interface MyConsole {
  type: string;
  args: Array<any>;
}

export default class App extends Component<AppProps, AppState> {
  constructor(props: any){
    super(props)
    this.state={
      logs: []
    }
  }

  createComponent(data: MyConsole){
    return(
      <div>{JSON.stringify(data.args)}</div>
    )
  }

  consoleHandler(data: MyConsole) {
    // @ts-ignore
    console.myLog({data})
    const newComponent = this.createComponent(data);
    this.setState((prevState) => ({
      logs: [...prevState.logs, newComponent],
    }));
  }

  componentDidMount() {
    console.log('Mounted')
    this.props.pubsub.subscribe('CONSOLE', (data: MyConsole) =>
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
