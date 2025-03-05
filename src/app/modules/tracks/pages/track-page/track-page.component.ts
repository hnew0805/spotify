import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css'],
})
export class TrackPageComponent implements OnInit {
  mockTracksList: Array<TrackModel> = [

  ]
  constructor() {}
  ngOnInit(): void {
    const {data}: any=(dataRaw as any).default
    this.mockTracksList=data;

  }
}
