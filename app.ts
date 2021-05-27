enum EGender{
    MALE="male",
    FEMALE="female"
}

class Deputy{
    name: string
    surname: string
    age: number
    gender : EGender
    position: number
    degreeOfHonesty : number

    constructor(name: string, surname: string, age: number, gender: EGender, position: number, degreeOfHonesty: number) {
        this.name = name
        this.surname = surname
        this.age = age
        this.gender = gender
        this.position = position
        this.degreeOfHonesty = degreeOfHonesty
    }
    public giveHabar(money): string{
        if(this.degreeOfHonesty > 50 || 1000 > money){
            return 'Impossible to give habar ' + this.name + ' ' + this.surname
        }
        else if((this.degreeOfHonesty * 10) + 1000 > money && money > 1000){
            return this.name + " " + this.surname + ' is thinking'
        }
        else {
            return this.name + " " + this.surname + ' takes habar'
        }
    }
}

class Party{
    name: string
    partyChairman: Deputy
    deputies: Array<Deputy>

    constructor(name: string, partyChairman: Deputy, deputies: Array<Deputy>) {
        this.name = name
        this.partyChairman = partyChairman;
        this.deputies = deputies
    }
    public showAllHabarer(): void{
       this.deputies.map(value => {if (value.degreeOfHonesty <= 50){
           console.log(value.name, value.surname);
       }})
    }
    public strong():number{
        let strong = 0
        this.deputies.map(value => strong += value.position)
        return strong
    }
    public addDeputy(deputy : Deputy):void{
        this.deputies.push(deputy)
    }
    public deleteDeputy(deputy:Deputy):Array<Deputy>{
        let index = this.deputies.indexOf(deputy)
        return this.deputies.splice(index, 1)
    }
    public showBestHabarer(): void{
        let habarer = []
        this.deputies.map(value => {if(value.degreeOfHonesty <= 50){
            habarer.push(value.degreeOfHonesty)
        }})
        habarer.sort(function (a, b){
            return a - b
        })
        this.deputies.map(value => {
            if(habarer[0] === value.degreeOfHonesty){
                console.log(value.name, value.surname, habarer[0]);
            }
        })
    }
    public showDeputies():void{
        console.log(this.deputies);
    }

}

class VerhovnaRada{
    parties: Array<Party>
    spiker: Deputy
    constructor(parties: Array<Party>, spiker : Deputy) {
        this.parties = parties
        this.spiker = spiker
    }
   public addParty(party: Party): void{
         this.parties.push(party)
    }
    public deleteParty(party: Party):Array<Party>{
        let index = this.parties.indexOf(party)
        return this.parties.splice(index, 1)
    }
    private deleteAllParties():Array<Party>{
        return this.parties = []
    }
    public showAllPartis(): void{
        console.log(rada.parties);
    }
    public showMainParty():void{
        let stongs = []
        this.parties.map(value => {
            stongs.push(value.strong())
        })
        stongs.sort(function (a, b){
                return b - a
            })
        this.parties.map(value => {
            let s: number= value.strong()
            if(s === stongs[0]){
                console.log(value.name, stongs[0]);
            }
        })
    }
    public theBestHabarer(): void{
        let habarer = []
        this.parties.map(value => {value.deputies.map(deputy => {if(deputy.degreeOfHonesty <= 50){
            habarer.push(deputy.degreeOfHonesty)
        }})})
        habarer.sort(function (a, b){
            return a - b
        })
        this.parties.map(value => {
            value.deputies.map(deputy => {
                if(deputy.degreeOfHonesty === habarer[0]){
                    console.log(deputy.name, deputy.surname, habarer[0]);
                }
            })
        })
    }
}
let deputyValentyn = new Deputy('Valentyn', 'Kurylo', 19, EGender.MALE, 99, 98)
let deputyOlga = new Deputy('Olga', 'Ivanchuk', 24, EGender.FEMALE, 70, 80 )
let deputySasha = new Deputy('Sasha', 'Bezyk', 16, EGender.MALE, 90, 90)
let deputyIvan = new Deputy('Ivan', 'Ivaniv', 19, EGender.MALE, 50, 49)
let deputyVika = new Deputy('Vika', 'Vaskiv', 18, EGender.FEMALE, 50, 77)
let deputyChristina = new Deputy('Christina', 'Hordun', 18, EGender.FEMALE, 33, 40)
let deputyMaria = new Deputy('Maria', 'Gaiduk', 20, EGender.FEMALE, 40, 35)
let freedom = new Party('freedom', deputyValentyn,[deputyValentyn, deputySasha])
let Ukrain = new Party('Ukrain', deputyOlga, [deputyOlga, deputyChristina, deputyMaria])
let Orange = new Party('Orange', deputyIvan, [deputyIvan, deputyVika])
let rada = new VerhovnaRada([freedom], deputyValentyn)
rada.addParty(Ukrain)
rada.addParty(Orange)
let a = deputyMaria.giveHabar(10000)
let b = deputyValentyn.giveHabar(2000)
let c = deputyIvan.giveHabar(1100)
console.log(a);
console.log(b);
console.log(c);
rada.deleteParty(Orange)
rada.showAllPartis()


