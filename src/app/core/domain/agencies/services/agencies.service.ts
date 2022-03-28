import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AgencyMapper } from "../entities/agency.mapper";
import { AgencyModel } from "../models/agency.model";
import { AgenciesRepository } from "../repositories/agencies.repository";
import { AgenciesServicesInterface } from "./agencies.service.interfaces";

@Injectable({
    providedIn: 'root'
})
export class AgenciesServices implements AgenciesServicesInterface {
    
    private mapper = new AgencyMapper();

    agencies: AgencyModel[] = [];

    constructor(private agenciesRepository: AgenciesRepository) {

    }

    getAllAgencies(): Observable<AgencyModel[]> {
        const that = this;
        return that.agenciesRepository.getAllAgencies();
    }

    getAgenciesById(idAgency: number): Observable<AgencyModel> {
        throw new Error("Method not implemented.");
    }

    postAgencies(body: any): boolean {

        const that = this;

        let agencyDetail: AgencyModel = {
            id: 0,
            agencia: body['agencyName'],
            direccion: body['agencyAddress'],
            lat: body['agencyLatitude'],
            lon: body['agencyLongitude'],
            distrito: '',
            image: 'agency-image.png',
            departamento: '',
            provincia: ''
        };
          
        return that.agenciesRepository.postAgencies(agencyDetail);
    }

    updateAgencies(idAgency: number, body: any): boolean {

        const that = this;

        let agencyDetail: AgencyModel = {
            id: idAgency,
            agencia: body['agencyName'],
            direccion: body['agencyAddress'],
            lat: body['agencyLatitude'],
            lon: body['agencyLongitude'],
            distrito: body['agencyDistrict'],
            image: 'agency-image.png',
            departamento: '',
            provincia: ''
        };

        return that.agenciesRepository.updateAgencies(idAgency, agencyDetail);
    }

    deleteAgencies(idAgency: number): boolean {
        throw new Error("Method not implemented.");
    }

}