export enum Quarters {
    Q1 = 'Q1',
    Q2 = 'Q2',
    Q3 = 'Q3',
    Q4 = 'Q4',
}

export type IMonthsIncludesInQuarter = {
    [key: number]: number[],
}