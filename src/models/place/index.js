class Place {
    constructor( id, name, image, address, lat, lng ) {
        this.id = id.toString();
        this.name = name;
        this.image = image;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
    }
}

export default Place;