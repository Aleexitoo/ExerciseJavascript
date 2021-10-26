class Person{
    constructor(Name, LastName, Hair,){
        this.Name = Name
        this.LastName = LastName
        this.Hair = Hair
        this.Height = 1.14
        this.KnowledgeInProgramming = "Nothing"
        this.Programminglanguages = "Nothing"
    }
    getKnowledgeInProgramming(){
        return this.KnowledgeInProgramming

    }
    Programar(_SaberProgramar){
        this.KnowledgeInProgramming = _SaberProgramar 
    }
    getPrograminglaguages(){
        return this.Programminglanguages
    }

    Saberlenguajes(Programminglanguages){
        this.Programminglanguages = Programminglanguages 
    }
    getHair(){
        return this.Hair
    }
    CurlyHair(curly){
        this.Hair = curly
    }
    getHeight(){
        return this.Height
    }
    Tacones(_AlturaTacones){
        this.Height = _AlturaTacones + this.Height
    }
        
    getNombreCompleto(){
         this.Name +  + this.LastName
    }

    Name(Andrea){
         this.Name = Andrea
    }
    Name(Taza){
         this.LastName = Taza
    }
  
    

}

const person1 = new Person("Andrea", "Taza", "liso")
console.log(person1);
let NombreCompleto = person1.getNombreCompleto()
NombreCompleto = person1.NombreCompleto()
console.log(NombreCompleto);
let AlturaConTacones = person1.getHeight()
person1.Tacones(0,30)
console.log("altura inicial:" + AlturaConTacones);
AlturaConTacones = person1.getHeight()
let PeloRizado = person1.getHair()
PeloRizado = person1.getHair()
console.log(PeloRizado)

