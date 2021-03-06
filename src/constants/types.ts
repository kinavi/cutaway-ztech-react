export interface ILanguage {
    ru: string
    sr: string
    en: string
    [key: string]: string
}

export interface ILanguageLink {
    label: string,
    url: string
}

export interface IHeaderLinks {
    label: string,
    url: string
}

export type NavigationBarType = {
    label: string,
    links: Array<ILanguageLink>
}

export type HeaderType = {
    Navigationlinks: Array<IHeaderLinks>,
    phone: string,
    urlLogo: string,
    nameCompany: string,
    textButton: string,
}

export type AboutType = {
    nameCompany: string,
    caption: string,
    description: string,
    advantage: string,
    textButton: string,
}

export type OutsideType = {
    advantage: string,
    explanation?: string
}

export type IconType = {
    label: string,
    index: number
}

export type AdvantagesType = {
    title: string,
    outsides: Array<OutsideType>,
    interior: Array<string>,
    icons: Array<IconType>,
    titleOutsid: string,
    titleInterior: string
}

export interface IBodyTable {
    label: string,
    text?: Array<string>
}

export type TableType = {
    title: string,
    head: Array<string>,
    body: Array<IBodyTable>
}

export interface ICharacteristic {
    label: string,
    description: string
}

export interface ICase {
    name: string,
    price: string,
    nameModel: string,
    characteristics: Array<ICharacteristic>

}

export type ShowCasesType = {
    title: string,
    cases: Array<ICase>
}

export type ContactsType = {
    title: string,
    phone: string,
    email: string,
    address: string
}

export type FormType = {
    placeholderName: string;
    placeholderNumber: string;
    placeholderEmail: string;
    placeholderComment: string;
    messange: string;
    title: string;
    nameLabel: string;
    numberLabel: string;
    emailLabel: string;
    commentLabel: string;
    buttonLabel: string;
  }
