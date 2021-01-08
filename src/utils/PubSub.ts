class PubSub {
  topics: any;
  constructor(name = "") {
    // @ts-ignore
    if (!!PubSub.instance) {
      // @ts-ignore
      return PubSub.instance;
    }
    // @ts-ignore
    PubSub.instance = this;
    // @ts-ignore
    this.topics = {};
    return this;
  }

  // @ts-ignore
  subscribe (topic: string, listener: Function)  {
    // Create the topic's object if not yet created
    console.info({ topic, topics: this.topics });
    if (!this.topics.hasOwnProperty(topic)) this.topics[topic] = [];

    // Add the listener to queue
    const index = this.topics[topic].push(listener) - 1;

    // Provide handle back for removal of topic
    return {
    remove: () => {
      delete this.topics[topic][index];
    },
  };
}
publish (topic: string, info: any)  {
  console.info({ topic, info, topics: this.topics });
  // If the topic doesn't exist, or there's no listeners in queue, just leave
  if (!this.topics.hasOwnProperty(topic)) return;

  // Cycle through topics queue, fire!
  this.topics[topic].forEach((item: any) => {
    item(info !== undefined ? info : {});
  });
}
}

const instance = new PubSub();

export default instance;
