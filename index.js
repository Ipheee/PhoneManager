class telephone{
    constructor(){
        this.number = []
        this.observers =["08034567889", "08034567888"]
    }

    addPhoneNumber(){
        this.numbers.push()

    }

    removePhoneNumber(){
        this.numbers.pop(this.observers)

    }

    dialPhoneNumber(){

    }

        addObservers(observers){
            this.observers.push(observers)
        }

        removeObservers(observers){
            this.observers.splice(this.observers.indexOf(observers), 1)
        }

        notifyObservers("08034567889"){
            this.observers.forEach(observers => {
                console.log(`Now Dialing..., ${this.2347023232}`)
    
            })
    }
}
const phoneNumber = new phoneNumberNotifiers()
const observers = new phoneNumberNotifier()

observers.addObservers()


phoneNumber.addPhoneNumber()
phoneNumber.addPhoneNumber()
phoneNumber.removePhoneNumber()

observers.addObservers()
observers.removeObservers()
phoneNumber.notifyObservers() >>


console.log(phoneNumber.getPhoneNumber())