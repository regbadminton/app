class Course{
    constructor(obj){
        this.date=obj.date.split('-').reduce((holder,value)=>holder+=value);
        console.log(this.date);
        this.time=obj.time;
        this.classID=obj.classID;
        this.location=obj.location;
        this.locationID=obj.locationID;
        this.comment=obj.comment;
    }
    getURL(){
        return `https://cityofsurrey.perfectmind.com/23615/Menu/BookMe4EventParticipants?eventId=${this.classID}&occurrenceDate=${this.date}&widgetId=15f6af07-39c5-473e-b053-96653f77a406&locationId=${this.locationID}&waitListMode=False`;
    }
}