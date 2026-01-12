import { Injectable } from '@angular/core';
import { Section } from '../types';

@Injectable({
  providedIn: 'root',
})
export class SectionStorage {
  private readonly keyName = `ng-section-data` as const;

  get(): readonly Section[] | null {
    const jsonText = localStorage.getItem(this.keyName);

    return JSON.parse(jsonText ?? 'null');
  }

  set(data: readonly Section[]): void {
    const jsonText = JSON.stringify(data);

    localStorage.setItem(this.keyName, jsonText);
  }
}
