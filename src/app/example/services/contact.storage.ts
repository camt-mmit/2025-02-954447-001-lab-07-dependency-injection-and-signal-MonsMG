import { Injectable, APP_ID, inject } from '@angular/core';
import { Contact } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ContactStorage {
  private readonly keyName = `${inject(APP_ID)}-contact-storage` as const;

  get(): readonly Contact[] | null {
    const jsonText = localStorage.getItem(this.keyName);

    return JSON.parse(jsonText ?? 'null');
  }

  set(data: readonly Contact[]): void {
    const jsonText = JSON.stringify(data);

    localStorage.setItem(this.keyName, jsonText);
  }
}
