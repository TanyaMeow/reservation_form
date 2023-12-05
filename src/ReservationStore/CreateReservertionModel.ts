import { makeAutoObservable, observable } from "mobx";

export interface ModelInterface {
    userId: string,
    from: string,
    to: string,
    title: string,
    workplaceId: string
}

class CreateReservationModel {

    @observable
    public reserveModel: ModelInterface = {
        userId: '',
        from: '',
        to: '',
        title: '',
        workplaceId: ''
    };

    constructor() {
        makeAutoObservable(this);
    }

    public setUserId(id: string) {
        this.reserveModel.userId = id;
    }

    public setFrom(date: string) {
        this.reserveModel.from = date;
    }

    public setTo(date: string) {
        this.reserveModel.to = date;
    }

    public setTitle(title: string) {
        this.reserveModel.title = title;
    }

    public setWorkplaceId(id: string) {
        this.reserveModel.workplaceId = id;
    }
}

export default new CreateReservationModel();