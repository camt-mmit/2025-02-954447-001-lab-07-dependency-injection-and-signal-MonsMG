import { Section, SectionModel, NumberModel } from './types';

export function createNumber(num?: number): NumberModel {
  return { value: num ?? 0 };
}

export function createSection(section?: Section): SectionModel {
  const { numbers } = section ?? {
    numbers: [0],
  };

  return {
    numbers: numbers.map((num) => createNumber(num)),
  };
}

export function createSections(sections?: readonly Section[]): readonly SectionModel[] {
  return (sections ?? [undefined]).map(createSection);
}

export function toNumber(numberModel: NumberModel): number {
  return numberModel.value;
}

export function toSection(sectionModel: SectionModel): Section {
  const { numbers } = sectionModel;

  return {
    numbers: numbers.map(toNumber),
  };
}

export function toSections(sectionsModel: readonly SectionModel[]): readonly Section[] {
  return sectionsModel.map(toSection);
}
