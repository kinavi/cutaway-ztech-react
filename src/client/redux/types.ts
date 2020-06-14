export enum StatusGame {
    initial = 'initial',
    started = 'started',
    finished = 'finished'
}

export interface IApp {
    status: StatusGame
}

export interface IGame {
    firstSelected: ISelected,
    secondSelected: ISelected,
    gameFields: Array<IGameField>
    pointCount: number
}

export interface IState {
    app: IApp,
    game: IGame
}

export interface IGameField {
    id: string,
    name: string,
    isOpen: boolean,
    element: JSX.Element
}

export interface ISelected {
    isSelect: boolean,
    id: string,
    name: string,
}
