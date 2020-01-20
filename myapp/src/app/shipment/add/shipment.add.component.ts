import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShipmentService } from '../shipment.service';

@Component({
    selector: 'app-shipment-component',
    templateUrl: 'shipment.add.component.html',
    styleUrls:['./shipment.add.component.css']
})

export class ShipmentAddComponent implements OnInit {


    shipments:any[]

    shipment_id:number
    shipment_name:String
    shipmentService:ShipmentService
    constructor(private router:Router,
        shipmentService:ShipmentService )
         { 
              this.shipmentService=shipmentService

              shipmentService
            .getAllShipments()
            .subscribe(response=>{
                if(response['status']=='success'){
                    this.shipments=response['data']



                    const shipment=this.shipments[0]
                    this.shipment_id=this.shipment_id
                }
            })
         }

    ngOnInit() { }

    onAdd() {
       
    
        this.shipmentService
          .addshipment(this.shipment_name)
          .subscribe(response => {
            if (response['status'] == 'success') {
              alert('added shipment')
              this.router.navigate(['/app-shipment-list'])
            } else {
              alert('error while adding shipment')
              console.log(response['error'])
            }
          })
      }
    }
