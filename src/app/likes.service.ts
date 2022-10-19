import { Injectable } from '@angular/core';

interface Like {
  [k:string]: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  // public content: string[] = [];
  // public likes: boolean[] = [];
  public likes: Like = {};

  constructor() { }

  // getContent(content: string[]) {
  //   this.content = content;
  //   for (let i = 0; i < this.content.length; i++) {
  //     const like: Like = {};
  //     like[this.content[i]] = false;
  //     // this.likes.push(like);
  //   }
  //   console.log(this.content.length);
  //   console.log(this.likes);
  // }

  public toggle(key: string) {
      this.likes[key] = !this.likes[key];
      console.log(this.likes);
    // проверяем есть ли свойство key в объекте likes. если есть значит изменяем значение (boolean) если нет - добавляем запись key: true;
  }

  public isLiked(key:string): boolean {
    return this.likes[key];
  }

  // like(i: number) {
  //   console.log(this.content[i]);
  //   const like: Like = {};
    
  //   Object.keys(this.likes[i])[0] = false;
  //   like[this.content[i]] = true;
  //   this.likes.push(like);
  //   console.log(this.likes);
  // }
}
