import { METHODS, RequestManager } from './requestManager';

import { WorkplaceInterface } from "../interfaces/workplace";
import { FullInfoInterface } from "../interfaces/fullInfo";
import { ModelInterface } from "../ReservationStore/CreateReservertionModel";

import { workplaceDecoders } from "./decoders/workplace";
import { fullInfoDecoders } from "./decoders/fullInfo";
import { string } from "jsonous";

export class ReservationApi extends RequestManager {
  public async getUser(): Promise<FullInfoInterface> {
    return await this.createRequest({
      url: 'Users/full-info',
      serverDataDecoder: fullInfoDecoders,
    })({});
  };

  public async createReservation(body: ModelInterface): Promise<string> {
    return await this.createRequest({
      url: 'Reservations',
      method: METHODS.POST,
      serverDataDecoder: string
    })({body})
  }

  public async getWorkplaces({ additionalQueryParams }: { additionalQueryParams: { type: number[]; buildingsID: string; } }): Promise<WorkplaceInterface[]> {
    return await this.createRequest({
      url: 'Workplaces/plain',
      serverDataDecoder: workplaceDecoders
    })({ additionalQueryParams })
  }
}

export default new ReservationApi();