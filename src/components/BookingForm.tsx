import {BookingLocation} from "./BookingLocation";
import {BookingDate} from "./BookingDate";
import {SubjectMeeting} from "./SubjectMeeting";
import {ButtonBooking} from "./ButtonBooking";
import {observer} from "mobx-react";

export const BookingForm = observer(() => {
    return (
        <div className="wrapper">
            <div className="form">
                <BookingLocation />
                <div className="reserve_form">
                    <BookingDate />
                    <SubjectMeeting />
                    <ButtonBooking />
                </div>
            </div>
        </div>
    )
})