import jwt_decode from 'jwt-decode';

export default function getToegang() {
    try {
        let token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        const userRole = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        if (userRole != "Medewerker" && userRole != "Admin") {
            return false;
        }
        return true;
    } catch {
        return false;
    }
}