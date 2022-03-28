import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgencyModel } from 'src/app/core/domain/agencies/models/agency.model';
import { AgenciesServices } from 'src/app/core/domain/agencies/services/agencies.service';
import { environment } from 'src/environments/environment';
import { AgenciesDetailObservable } from '../../views/agencies/agencies-detail/agencies-detail.observable';
declare var ol: any;
declare var OpenLayers: any;

@Component({
  selector: 'app-agency-map',
  templateUrl: './agency-map.component.html',
  styleUrls: ['./agency-map.component.scss']
})
export class AgencyMapComponent implements OnInit {
 
  latitude: number = -12.0266034;
  longitude: number = -77.1278659;

  public map: any;

  public idAgency: number = 0;

  constructor(
    private agenciesDetailObservable: AgenciesDetailObservable,
    private agenciesService: AgenciesServices,
    public routeActivated: ActivatedRoute
  ) { 
    const that = this;
    that.idAgency = Number(this.routeActivated.snapshot.paramMap.get('idAgency'));
  }

  ngOnInit(): void {

    const that = this;

    if(that.idAgency > 0) {
      that.agenciesService.getAllAgencies().subscribe( res => {
        let agency = res.find(f => f.id == that.idAgency);
        if(agency != undefined) {
          that.setAsignedMarkerAndCenter(agency.lat, agency.lon);
        }
      });
    } else {
      that.setAsignedMarkerAndCenter(that.longitude, that.latitude);
    }
    
  }

  public setAsignedMarkerAndCenter(latitude: number, longitude: number) {

    const iconFeature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([latitude, longitude]))
    });
    
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        new ol.layer.Vector({
          source: new ol.source.Vector({
            features: [iconFeature]
          }),
          style: new ol.style.Style({
            image: new ol.style.Icon({
              anchor: [0.5, 46],
              anchorXUnits: 'fraction',
              anchorYUnits: 'pixels',
              src: environment.AGENCY_URL_MARKER
            })
          })
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([latitude, longitude]),
        zoom: 12
      })
    });

    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([latitude, longitude]));
    view.setZoom(12);

  }
  

}
