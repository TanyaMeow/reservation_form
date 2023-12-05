import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent
} from "@mui/material";

import { useEffect, useState } from "react";

import api from '../api/ReservationApi';
import model from '../ReservationStore/CreateReservertionModel';

import {
    useQuery,
    UseQueryResult
} from "react-query";

import { WorkplaceInterface } from "../interfaces/workplace";
import {StringParam, useQueryParam} from "use-query-params";

interface LocationInterface {
    id: string,
    name: string
}

export function BookingLocation(): JSX.Element {
    const [location, setLocation] = useState<string>('');
    const [workplaceId, setWorkplaceId] = useQueryParam('workplaceId', StringParam);
    const [workplaceName, setWorkplaceName] = useQueryParam('workplaceName', StringParam);

    const queryResult: UseQueryResult<LocationInterface[]> = useQuery(
        'locations',
        async (): Promise<LocationInterface[]> => {
            const locations: WorkplaceInterface[] = await api.getWorkplaces({
                    additionalQueryParams: {
                        type: [1],
                        buildingsID: "00000000-0000-0000-0000-000000000001"
                    }
                }
            )

        return locations.map((location: WorkplaceInterface): LocationInterface => {
            return {
                id: location.id,
                name: location.name
            }
        })
    })

    useEffect((): void => {
        if (workplaceName !== undefined) {
            // @ts-ignore
            setLocation(workplaceName);
        }
    }, []);

    const handleChange = (event: SelectChangeEvent): void => {
        // @ts-ignore
        const id: string = queryResult.data.find((name: LocationInterface): boolean => name.name === event.target.value).id;

        setWorkplaceId(id);
        setWorkplaceName(event.target.value);
        setLocation(event.target.value);

        model.setWorkplaceId(id);
    };


    return (
        <div className="location">
            <div className='location_plain'>
                <FormControl sx={{m: 1, minWidth: 200}} size="small">
                    <InputLabel id="demo-simple-select-standard-label">Переговорка</InputLabel>
                    <Select labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard-label"
                            value={location}
                            label="Переговорка"
                            onChange={handleChange}>
                        {queryResult?.data?.map((location: LocationInterface, index: number) => {
                            return <MenuItem key={index}
                                             value={location.name}>{location.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </div>
            <h1>{location}</h1>
        </div>
    )
}