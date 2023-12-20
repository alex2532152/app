import { Route, Routes } from "react-router-dom";
import { Users } from "../../modules/Users";
import { Currency } from "../../modules/Currency";

export const RoutedApp = () => 
     <Routes>
        <Route path="*" element={<Users />} />
        <Route path="/currency/*" element={<Currency />} />
    </Routes>
