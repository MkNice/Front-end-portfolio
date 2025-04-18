
export interface IBaseSection {
    title: string;
    description: string;
}

export interface ISectionItem  extends IBaseSection{
    icon: string;
}

export interface ISectionData   extends IBaseSection {
    items: ISectionItem[];
}
