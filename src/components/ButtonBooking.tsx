import Button from '@mui/material/Button';

import api from "../api/ReservationApi";
import model from '../ReservationStore/CreateReservertionModel';

import {
    useQuery,
    UseQueryResult
} from "react-query";

import { FullInfoInterface } from "../interfaces/fullInfo";

export function ButtonBooking(): JSX.Element {
    const query: UseQueryResult<FullInfoInterface> = useQuery(
        'full-info',
        async (): Promise<FullInfoInterface> => {
            return await api.getUser();
        }
    )

    async function createBook(): Promise<void> {
        // @ts-ignore
        model.setUserId(query.data.id);
        await api.createReservation(model.reserveModel);
    }

    return (
        <div className='button'>
            <Button variant="contained" onClick={createBook}>Забронировать</Button>
        </div>
    )
}