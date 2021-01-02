import { generateRandomId } from '../../utils';

export default class Container {
  active: boolean;
  toasts: Map<any,any>;
  containerID: string;
  constructor(){
    this.active = false;
    this.toasts = new Map();
    this.containerID = generateRandomId();
  }
  setActive(payload: boolean){
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

