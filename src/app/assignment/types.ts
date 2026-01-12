export interface Section {
  readonly numbers: readonly number[];
}

export interface NumberModel {
  value: number;
}

export interface SectionModel {
  numbers: readonly NumberModel[];
}
