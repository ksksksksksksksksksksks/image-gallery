import { Injectable } from '@angular/core';

interface Like {
  [k:string]: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  public likes: Like = {};

  constructor() { }

  public toggle(key: string) {
    this.likes[key] = !this.likes[key];
  }

  public isLiked(key:string): boolean {
    return this.likes[key];
  }
  
}
