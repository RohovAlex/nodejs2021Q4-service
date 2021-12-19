import {v4 as uuid} from 'uuid';

interface IBoard {
  id: string,
  title: string,
  columns: any[]
}

let boards: IBoard[] = [];
export default class Board {
  boards: IBoard[]

  static getById = async (id: string) : Promise<IBoard | undefined> => boards.find((board: IBoard) => board.id === id);

  static getAll = async () : Promise<IBoard[]> => boards;

  static create = async (title: string, columns: any[]) : Promise<IBoard> => {
    const newBoard: IBoard = {
      id: uuid(),
      title, columns
    }
    boards.push(newBoard)
    return newBoard;
  };

  static deleteById = async (id: string): Promise<void> => {
    boards = boards.filter((board) => board.id !== id);
  };

  static updateById = async (id: string, title: string, columns: any[]) : Promise<IBoard | undefined> => {
    boards = boards.map((board) => board.id === id ? {id, title, columns} : board);
    const updatedBoard = await Board.getById(id);
    return updatedBoard;
  }; 
}
