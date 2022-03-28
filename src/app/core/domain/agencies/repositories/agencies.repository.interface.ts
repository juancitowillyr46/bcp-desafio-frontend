import { Observable } from "rxjs";
import { AgencyModel } from "../models/agency.model";

export interface AgenciesRepositoryInterface {
    getAllAgencies(): Observable<AgencyModel[]>;
    getAgenciesById(idAgency: number): Observable<AgencyModel>;
    postAgencies(body: AgencyModel): boolean;
    updateAgencies(idAgency: number, body: AgencyModel): boolean;
    deleteAgencies(idAgency: number): boolean;
}