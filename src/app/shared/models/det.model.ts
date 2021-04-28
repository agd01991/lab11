export class MyDet {
    id: number;
    name: string;
    status: boolean;

    constructor() {
        this.status = Math.random() < 0.5
    }
}