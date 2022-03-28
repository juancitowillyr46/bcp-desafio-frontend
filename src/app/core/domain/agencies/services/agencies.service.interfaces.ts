import { Observable } from "rxjs";
import { AgencyEntity } from "../entities/agency.entities";

export interface AgenciesServicesInterface {
    getAllAgencies(): Observable<AgencyEntity[]>;
    getAgenciesById(idAgency: number): Observable<AgencyEntity>;
    postAgencies(body: AgencyEntity): boolean;
    updateAgencies(idAgency: number, body: AgencyEntity): boolean;
    deleteAgencies(idAgency: number): boolean;
}