import { DecimalPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  input,
  model,
  numberAttribute,
  output,
} from '@angular/core';
import { createSection, createNumber } from '../../helpers';

@Component({
  selector: 'app-dynamic-input',
  imports: [DecimalPipe],
  templateUrl: './dynamic-input.html',
  styleUrl: './dynamic-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    role: 'section',
  },
})
export class DynamicInput {
  readonly number = input(NaN, { transform: numberAttribute });
  readonly section = model(createSection());
  readonly removable = input(true, { transform: booleanAttribute });

  readonly remove = output<void>();

  protected numberIsNaN = computed(() => Number.isNaN(this.number()));

  protected addNumber(): void {
    this.section.update((section) => {
      const { numbers, ...rest } = section;

      return {
        ...rest,
        numbers: [...numbers, createNumber()],
      };
    });
  }

  protected changeNumber(index: number, value: string): void {
    this.section.update((section) => {
      const { numbers, ...rest } = section;

      return {
        ...rest,
        numbers: numbers.map((num, i) => {
          if (i === index) {
            num.value = Number(value) || 0;
          }

          return num;
        }),
      };
    });
  }

  protected removeNumber(index: number): void {
    this.section.update((section) => {
      const { numbers, ...rest } = section;

      return {
        ...rest,
        numbers: numbers.filter((_value, i) => i !== index),
      };
    });
  }

  protected result = computed(() => 
    this.section().numbers.reduce((sum, num) => sum + num.value, 0)
  );
}
