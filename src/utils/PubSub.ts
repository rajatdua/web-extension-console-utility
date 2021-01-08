export const PubSub = (() => {
	const topics: {[key: string]: Function[]} = {};
	return {
	  subscribe: (topic: string, listener: Function) => {
		// Create the topic's object if not yet created
		console.info({topic, topics})
		if (!topics.hasOwnProperty(topic)) topics[topic] = [];
  
		// Add the listener to queue
		const index = topics[topic].push(listener) - 1;
  
		// Provide handle back for removal of topic
		return {
		  remove: () => {
			delete topics[topic][index];
		  }
		};
	  },
	  publish: (topic: string, info: any) => {
		console.info({topic, info, topics})
		// If the topic doesn't exist, or there's no listeners in queue, just leave
		if (!topics.hasOwnProperty(topic)) return;
  
		// Cycle through topics queue, fire!
		topics[topic].forEach((item) => {
		  item(info !== undefined ? info : {});
		});
	  }
	};
  })();