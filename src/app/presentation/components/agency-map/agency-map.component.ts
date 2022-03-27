import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
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

  constructor() { }

  ngOnInit(): void {

    const that = this;

    that.latitude = -12.0266034;
    that.longitude = -77.1278659;

    that.setAsignedMarkerAndCenter(that.latitude, that.longitude);

  }

  public setAsignedMarkerAndCenter(latitude: number, longitude: number) {

    const iconFeature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([longitude, latitude]))
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
              src: environment.AGENCY_IMAGE_URL
            })
          })
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([longitude, latitude]),
        zoom: 12
      })
    });

    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(12);

  }
  

}
