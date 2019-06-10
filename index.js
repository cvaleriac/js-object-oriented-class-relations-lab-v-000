let store = { drivers: [], passengers: [], trips:[] };
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;

        store.drivers.push(this);
    }
    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        );
    }
    passengers() {
        return store.passengers.filter(
            function(passenger) {
                return passenger.tripId === this.tripId;
            }.bind(this)
        );
    }
}


class Passenger {
    constructor(name, price, user) {
        this.id = ++itemId;
        this.name = name;
        }

        store.passenger.push(this);
    }
    setUser(driver) {
        this.driverId = driver.id;
    }
}
