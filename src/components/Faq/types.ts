export interface IOption {
    label: string,
}

export interface INote {
    caption: string,
    text: string,
    isMobile: boolean,
    options?: Array<IOption>
}
