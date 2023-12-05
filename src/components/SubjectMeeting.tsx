import model from "../ReservationStore/CreateReservertionModel";
import { ChangeEvent } from "react";

export function SubjectMeeting(): JSX.Element {
    return (
        <div className='theme_meet'>
            <p>Тема встречи</p>
            <input className='input_theme' type="text" placeholder='Введите тему' onChange={(e: ChangeEvent<HTMLInputElement>) => model.setTitle(e.target.value)}/>
        </div>
    )
}