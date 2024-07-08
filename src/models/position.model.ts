export interface Position {
    id: number;
    category: string;
    level: string;
    company: string;
    description?: string;
    japaneseRequired: boolean;
}

export interface PositionToAdd {
    category: string;
    level: string;
    company: string;
    description?: string;
    japaneseRequired: boolean;
}

export interface PositionToPatch {
    japaneseRequired?: boolean;
    description?: string;
}
