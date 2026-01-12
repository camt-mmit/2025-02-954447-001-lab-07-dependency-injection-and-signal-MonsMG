import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, model, ViewEncapsulation } from '@angular/core';
import { createSection, createSections } from '../../helpers';
import { SectionModel } from '../../types';
import { DynamicInput } from '../dynamic-input/dynamic-input';

@Component({
  selector: 'app-dynamic-section',
  imports: [DynamicInput, DecimalPipe],
  templateUrl: './dynamic-section.html',
  styleUrl: './dynamic-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    role: 'article',
  },
})
export class DynamicSection {
  readonly sections = model(createSections());

  protected addSection(): void {
    this.sections.update((sections) => {
      return [...sections, createSection()];
    });
  }

  protected changeSection(index: number, value: SectionModel): void {
    this.sections.update((sections) => {
      return sections.map((section, i) => {
        if (i === index) {
          return value;
        }
        return section;
      });
    });
  }

  protected removeSection(index: number): void {
    this.sections.update((sections) => {
      return sections.filter((_value, i) => i !== index);
    });
  }
}
