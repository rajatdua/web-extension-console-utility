(function () {
  var log = console.log;
  console.log = function () {
    log.call(this, 'My Console!!!', ...arguments);
  };
}());

const generateRandomId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

class Container {
  constructor(){
    this.active = false;
    this.toasts = new Map();
    this.containerID = generateRandomId();
  }
  setActive(payload){
    this.active = payload;
  }
  getActive(){
    return this.active;
  }
  getContainerID(){
    return this.containerID;
  }
  getAllToasts(){
    return this.toasts;
  }
}

class Toast extends Container{
  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super();
  }
  create(options){
    const toastID = generateRandomId();
    this.toasts.set(toastID, options);
    this.mount(toastID);
    return toastID;
  }
  destroy(id){
    if(this.toasts.has(id)){
      this.unmount(id);
      this.toasts.delete(id);
    }else{
      throw new Error(`ID Doesn't exist - ${id}`);
    }
  }
  mount(id){
    // TODO: call mount function
  }
  unmount(id){
    // TODO: call un-mount function
  }
}

const toastInstance = new Toast();
toastInstance.setActive(true); // toggle option - container is initially false we need to make it true
const id = toastInstance.create(); // called inside the override log
console.log(toastInstance.getAllToasts()); // for calculation if required
toastInstance.destroy(id); // if someone presses x button to remove the toast
toastInstance.setActive(false); // toggle option - if someone wants to stop recording the instances
