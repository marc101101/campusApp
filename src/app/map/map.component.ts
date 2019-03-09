import { Component, OnInit } from '@angular/core';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, LatLng, tileLayer,marker,icon } from 'leaflet';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { MapboxGeoJSONFeature, MapLayerMouseEvent } from 'mapbox-gl';



declare var foo: Function;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  currentPoint;
  points = {
    'type': 'FeatureCollection',
    'features': [{
      'type': 'Feature',
      'properties': {
        'description': 'Westbad.',
        'name': 'das Stadtwerk',
        'icon': 'star',
        'link': 'https://www.das-stadtwerk-regensburg.de/home/'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [12.09499, 49.0007566]
      }
    },
  
  
  {
      'type': 'Feature',
      'properties': {
        'description': 'Infinite Entertainment',
        'name': 'Cipsoft',
        'icon': 'star',
        'link':'https://www.cipsoft.com/index.php/de/'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [12.0957644, 49.0007566]
      }
    },
  
  {
      'type': 'Feature',
      'properties': {
        'name': 'Eichhofener',
        'description': 'Bierspezialitäten aus dem schönen Labertal',
        'icon': 'star',
        'link': 'http://www.eichhofen.de/index.php/willkommen.html'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [12.0957644, 49.001713]
      }
    },
  {
      'type': 'Feature',
      'properties': {
        'description': 'Die Gesundheitskasse',
        'name': 'AOK',
        'icon': 'star',
        'link': 'http://www.aok.de/bayern/studierende'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [12.097019, 49.000302]
      }
    },
  
  {
      'type': 'Feature',
      'properties': {
        'description': 'gruber halt. wer kennts nicht.',
        'name': 'gruber',
        'icon': 'star',
        'link':'https://www.gruber-unternehmensgruppe.de/karriere/jobs/jobs.html'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [12.0967644, 49.000500]
      }
    },
  
  {
      'type': 'Feature',
      'properties': {
        'description': ' Living Logistics',
        'name': ' TGW',
        'icon': 'star',
        'link': 'https://www.tgw-group.com/de/'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [12.0951644, 49.000700]
      }
    },
  
  {
      'type': 'Feature',
      'properties': {
        'description': 'Verband für Popkultur in Bayern e.V.',
        'name': 'VPBY',
        'icon': 'star',
        'link': 'https://www.popkultur.bayern/vpby/'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [12.0944644, 49.000500]
      }
    },
  
  {
      'type': 'Feature',
      'properties': {
        'description': 'Oberpfalz Süd eG',
        'name': 'Raiffeisenbank',
        'icon': 'star',
        'link': 'https://www.rb-os.de/privatkunden/junge-kunden.html'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [12.097, 49.0007566]
      }
    },
    ]
  };
  
  onClick(evt: MapLayerMouseEvent) {
    // this.selectedPoint = evt.features![0];
    this.currentPoint = evt.features![0];
  }
  constructor() {
  }

    

  ngOnInit() {
    // console.log("something")
    
  }

}
