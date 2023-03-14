import { ICards } from "./ICards";

export interface IMainProps {
    cards: ICards[];
    loading: boolean;
    deleteCard(card: ICards): void;
}