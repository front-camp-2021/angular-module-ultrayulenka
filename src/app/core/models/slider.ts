export default interface Slider {
    title: string
    min: number,
    max: number,
    prefix?: string,
    selected: {
      from: number,
      to: number
    },
    precision?: number
}