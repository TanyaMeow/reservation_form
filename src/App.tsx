import React from 'react';
import './App.css';
import {BookingForm} from "./components/BookingForm";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {useTranslation} from "react-i18next";
import './intell';
import {Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import {QueryParamProvider} from "use-query-params";
import {ReactRouter6Adapter} from "use-query-params/adapters/react-router-6";

function App() {
    const { i18n } = useTranslation();
    const queryClient: QueryClient = new QueryClient();

    return (
    <div className="App">
        <LocalizationProvider dateAdapter={AdapterDayjs}
                              adapterLocale={i18n.language}>
            <QueryClientProvider client={queryClient}>
                <QueryParamProvider adapter={ReactRouter6Adapter}>
                    <Routes>
                        <Route path="/quick-booking"
                               element={ <BookingForm /> } />
                    </Routes>
                </QueryParamProvider>
            </QueryClientProvider>
        </LocalizationProvider>
    </div>
  );
}

export default App;
