import Container from './Container';
import { generateRandomId } from '../utils';

interface Options {
  type: string,
}

export default class Toast extends Container{
  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super();
  }
  create(options: Options){
    const toastID = generateRandomId();
    this.toasts.set(toastID, options);
    this.mount(toastID);
    return toastID;
  }
  destroy(id: string){
    if(this.toasts.has(id)){
      this.unmount(id);
      this.toasts.delete(id);
    }else{
      throw new Error(`ID Doesn't exist - ${id}`);
    }
  }
  mount(id: string){
    // TODO: call mount function
  }
  unmount(id: string){
    // TODO: call un-mount function
  }
}
