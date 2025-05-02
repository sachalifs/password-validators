export interface Validator {
  id: string
  title: string
  validate: (value: string) => boolean
}
