import { Mapper } from "src/app/core/base/mapper";
import { AgencyModel } from "../models/agency.model";
import { AgencyEntity } from "./agency.entities";

export class AgencyMapper extends Mapper <AgencyEntity, AgencyModel> {

    mapFrom(param: AgencyEntity): AgencyModel {

      return {
        id: param.id,
        agencia: param.agencia,
        direccion: param.direccion,
        distrito: param.distrito,
        image: param.image,
        lat: param.lat,
        lon: param.lon
      }

    }

    mapFromList(param: AgencyEntity[]): AgencyModel[] {

      let agencyModels: AgencyModel[] = [];

      param.forEach(agencyDto => {
        agencyModels.push(
          {
            id: agencyDto.id,
            agencia: agencyDto.agencia,
            direccion: agencyDto.direccion,
            distrito: agencyDto.distrito,                    
            image: agencyDto.image,
            lat: agencyDto.lat,
            lon: agencyDto.lon
          }
        )
      });

      return agencyModels;

    }

    mapTo(param: AgencyModel): AgencyEntity {

      return {
        id: param.id,
        agencia: param.agencia,
        direccion: param.direccion,
        distrito: param.distrito,
        image: param.image,
        lat: param.lat,
        lon: param.lon
      };

    }

    mapToList(param: AgencyModel[]): AgencyEntity[] {

      let agenciesDto: AgencyEntity[] = [];

      param.forEach(agencyModel => {
        agenciesDto.push({
          id: agencyModel.id,
          agencia: agencyModel.agencia,
          image: agencyModel.image,
          direccion: agencyModel.direccion,
          distrito: agencyModel.distrito,
          lat: agencyModel.lat,
          lon: agencyModel.lon
        })
      });

      return agenciesDto;

    }
}