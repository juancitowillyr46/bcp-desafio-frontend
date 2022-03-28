import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AgencyEntity } from "../entities/agency.entities";
import { AgencyMapper } from "../entities/agency.mapper";
import { AgencyModel } from "../models/agency.model";
import { AgenciesRepositoryInterface } from "./agencies.repository.interface";

@Injectable({
    providedIn: 'root'
})
export class AgenciesRepository implements AgenciesRepositoryInterface {

    private mapper = new AgencyMapper();
    private agenciesDataTmp: any = localStorage.getItem("agencies");

    constructor(private http: HttpClient) {
        
    }

    getAllAgencies(): Observable<AgencyModel[]> {
        const that = this;
        return that.http.get<AgencyEntity[]>('http://localhost:4200/assets/mockup/agencias.json').pipe(
            map(this.mapper.mapFromList)
        );
    }

    getAgenciesById(idAgency: number): Observable<AgencyModel> {        
        throw new Error("Method not implemented.");
    }

    postAgencies(body: AgencyModel): boolean {
        const that = this;
        let success = true;
        let agencies: any[] = JSON.parse(that.agenciesDataTmp);
        if(agencies != undefined) { 
            body.id = (agencies.length + 1);
            agencies.push(body);
            localStorage.setItem("agencies", JSON.stringify(agencies));
        }
        return success;
    }

    updateAgencies(idAgency: number, body: AgencyModel): boolean {
        const that = this;
        let success = true;
        let agencies: any[] = JSON.parse(that.agenciesDataTmp);
        if(agencies != undefined) { 
            let agencyIndex = agencies.findIndex(f => f.id == idAgency);
            if(agencyIndex != undefined) {
                agencies[agencyIndex] = body;
                localStorage.setItem("agencies", JSON.stringify(agencies));
            }
        }
        return success;
    }
    
    deleteAgencies(idAgency: number): boolean {
        throw new Error("Method not implemented.");
    }
   
}