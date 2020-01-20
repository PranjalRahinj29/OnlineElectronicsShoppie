import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShipmentService } from '../shipment.service';

@Component({
    selector: 'app-shipment-list',
    templateUrl: 'shipment.list.component.html',
    styleUrls:['shipment.list.component.css']
})


export class ShipmentListComponent implements OnInit {
    shipments :any[]=[]
    constructor(private router:Router,
        private shipmentService:ShipmentService) 
    {
        this.loadshipments()
    }
    loadshipments()
    {
        this.shipmentService
        .getAllShipments()
        .subscribe(response => {
            if (response['status'] == 'success') {
              this.shipments = response['data']
            }
          })
    }
    onAddShipment()
    {
        this.router.navigate(['/offer-add'])
    }

    ngOnInit() { }
    onDelete(shipment_id: number) {
        this.shipmentService
          .deleteshipment(shipment_id)
          .subscribe(response => {
            if (response['status'] == 'success') {
              this.loadshipments()
            } else {
              console.log(response['error'])
            }
          })
      }
}

