import { Injectable } from '@angular/core';

/**
 * class is message service alter or error return.
 */
@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

