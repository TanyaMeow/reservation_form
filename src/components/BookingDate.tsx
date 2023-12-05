import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useState } from "react";

import model from "../ReservationStore/CreateReservertionModel";
import dayjs from "dayjs";
import {StringParam, useQueryParam} from "use-query-params";

export function BookingDate(): JSX.Element {
    const [date, setDate] = useState<Date | null>(null);
    const [fromDate, setFromDate] = useState<Date | null>(null);
    const [toDate, setToDate] = useState<Date | null>(null);

    const [from, setFrom] = useQueryParam('from', StringParam);
    const [to, setTo] = useQueryParam('to', StringParam);

    const time: { date: string | null } = {
        date: date && new Date(date).toLocaleDateString("ko-KR")
    }

    function createFrom(value: Date): void {
        setFromDate(value);
        const fromNewDate: string = value && new Date(value).toLocaleTimeString('it-IT');

        const formatDate: string = time.date?.split('. ').join('-').replace('.', '') as string;
        if (fromDate !== null) {
            setFrom(`${formatDate}T${fromNewDate}`);
        }

        model.setFrom(`${formatDate}T${fromNewDate}.723Z`);
    }

    function createTo(value: Date): void {
        setToDate(value);
        const toNewDate: string = value && new Date(value).toLocaleTimeString('it-IT');

        const formatDate: string = time.date?.split('. ').join('-').replace('.', '') as string;
        if (toDate !== null) {
            setTo(`${formatDate}T${toNewDate}`);
        }

        model.setTo(`${formatDate}T${toNewDate}.723Z`);
    }

    return (
        <div>
            <div className="booking_date">
                <DatePicker className="date"
                            onChange={(value) => setDate(value as unknown as Date)}
                            defaultValue={dayjs(from)}/>
            </div>
            <div className='block_duration'>
                <div className="start_container">
                    <p className='start_time'>Начало</p>
                    <TimePicker views={['hours', 'minutes']}
                                format="hh:mm"
                                ampm={false}
                                ampmInClock={false}
                                onChange={(value) => createFrom(value as unknown as Date)}
                                defaultValue={dayjs(from)}
                                minutesStep={15}/>
                </div>
                <div className="end_container">
                    <p className='end_time'>Окончание</p>
                    <TimePicker views={['hours', 'minutes']}
                                format="hh:mm"
                                ampm={false}
                                ampmInClock={false}
                                onChange={(value) => createTo(value as unknown as Date)}
                                defaultValue={dayjs(to)}
                                minutesStep={15}/>
                </div>
            </div>
        </div>
    )
}