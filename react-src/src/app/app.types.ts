export type Nullable<T> = { [P in keyof T]: T[P] | null };

export type Optional<T> = Partial<Nullable<T>>;

export interface PostVariableRaw {
  first: number;
  last: number;
  after: string;
  before: string;
}

export type PostVariable = Optional<PostVariableRaw>;
