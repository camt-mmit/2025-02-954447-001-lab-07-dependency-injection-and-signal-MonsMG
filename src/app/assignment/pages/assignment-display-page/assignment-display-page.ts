import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { DynamicSection } from '../../components/dynamic-section/dynamic-section';
import { createSections, toSections } from '../../helpers';
import { SectionStorage } from '../../services/section.storage';

@Component({
  selector: 'app-assignment-display-page',
  imports: [DynamicSection],
  templateUrl: './assignment-display-page.html',
  styleUrl: './assignment-display-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignmentDisplayPage {
  private readonly dataStorage = inject(SectionStorage);

  protected readonly data = signal(createSections(this.dataStorage.get() ?? undefined));

  constructor() {
    effect(() => this.dataStorage.set(toSections(this.data())));
  }
}
