import {Component, Input, OnInit} from '@angular/core'
import {Router} from "@angular/router";
import {ParkingSpot} from "../../types/parkingSpot.type";
import {BikeStation} from "../../types/bikeStation.type";
import {ParkingspotService} from "../../services/parkingspot.service";
import {CategoryService} from "../../services/category.service";

@Component({
    selector: 'admin-parking-places-component',
    templateUrl: 'admin-parking-places-component.component.html',
    styleUrls: ['admin-parking-places-component.component.css'],
})
export class AdminParkingPlacesComponent implements OnInit {
    @Input()
    adminParkingPlacesHint: string =
        'Select one or multiple categories per place. One bike per place can then be assigned'
    @Input()
    adminParkingPlacesTitle: string = 'Parking Places'
    @Input()
    rootClassName: string = ''
    @Input()
    adminParkingPlacesButtonAddPlace: string = 'Add Place'

    bikeStation: BikeStation = {
        description: "string",
        latitude: 0,
        longitude: 0,
        station_address: "string",
        station_image_location: "string",
        station_name: "string",
        station_id: -1
    };

    parkingSpot: ParkingSpot = {
        spot_id: -1,
        station_id: -1,
        spot_number: -1,
        created_spot: -1
    };

    stationId = 0;
    parkingSpots: any[] = [];
    categories: any[] = [];
    updatedSpots: Map<number, any> = new Map();
    newSpots: Map<number, any> = new Map();
    counter = 0;

    constructor(private router: Router, private parkingService: ParkingspotService, private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.parkingSpots = [];
        this.fetchCategories();
        if (history.state && history.state.bikeStation) {
            this.bikeStation = history.state.bikeStation;
            this.stationId = this.bikeStation.station_id;

            this.fetchParkingSpots();
        }
    }

    fetchParkingSpots() {
        this.parkingService.fetchParkingSpots(this.stationId).subscribe({
            next: (val) => {
                this.parkingSpots = val
            },
            error: (err) => {
                if (err.status === 404) this.parkingSpots = [];
                else console.log(`Error while fetching parking spots from station ${this.stationId}`, err)
            }
        })
    }

    handleSpotUpdate(updatedSpot: any) {
        this.updatedSpots.set(updatedSpot.spot_id, updatedSpot);
        console.log(this.updatedSpots);
    }

    handleNewSpots(newSpot: any) {
        this.newSpots.set(newSpot.spot_id, newSpot);
        console.log(this.newSpots);
    }

    handleSpotDeletion() {
        this.fetchParkingSpots();
    }

    handleConfirm() {
        const spotsToUpdate = Array.from(this.updatedSpots.values());
        console.log(spotsToUpdate);
        if (spotsToUpdate.length > 0) {
            spotsToUpdate.forEach(spot => {
                if (spot.spot_id) {
                    console.log("TEST ", spot.categories)
                    this.parkingService.updateParkingSpot(spot.spot_id, spot.categories).subscribe({
                        next: (val) => {
                            console.log(val);
                            this.updatedSpots = new Map();
                            this.fetchParkingSpots();
                        },
                        error: (err) => console.log("Error while updating parking spots: ", err)
                    })
                }
            })
        }

        const newSpotsToInsert = Array.from(this.newSpots.values());
        if (newSpotsToInsert.length > 0) {
            newSpotsToInsert.forEach(spot => {
                this.parkingService.createParkingSpot(spot.station_id, spot.spot_number, spot.categories).subscribe({
                    next: (val) => {
                        this.fetchParkingSpots()
                        this.newSpots = new Map();
                    },
                    error: (err) => console.log("Error while adding new parking spots: ", err)
                })
            })
        }

    }

    addParkingSpot() {
        if (this.stationId > 0) {
            const spotNumbers = this.parkingSpots.map(spot => spot.spot_number).sort((a, b) => a - b);
            let nextAvailableSpotNumber = 1;
            for (let i = 0; i < spotNumbers.length; i++) {
                if (spotNumbers[i] !== nextAvailableSpotNumber) {
                    break; // Found a gap
                }
                nextAvailableSpotNumber++;
            }

            this.counter++;
            let spot = {spot_id: this.counter, station_id: this.stationId, spot_number: nextAvailableSpotNumber}

            this.handleNewSpots({...spot, categories: []})
            this.parkingSpots.push({
                spot_id: undefined,
                station_id: this.stationId,
                spot_number: nextAvailableSpotNumber,
                categories: [],
                created_spot: this.counter
            })

        } else alert('Please create bike station before adding parking places')
    }

    handleCancel() {
        this.router.navigate(["/admin-bike-stations"]);
    }

    handleNewSpotDeletion(event: any) {
        this.newSpots.delete(event)
        this.parkingSpots = this.parkingSpots.filter(spot => spot.created_spot !== event);
    }

    fetchCategories() {
        this.categoryService.getCategories().subscribe({
            next: (val) => this.categories = val,
            error: (err) => {
                if (err.status === 404) this.categories = [];
                else console.log("Error while fetching categories: ", err);
            }
        })
    }
}
