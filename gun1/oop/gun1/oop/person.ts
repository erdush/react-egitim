export abstract class Person{

    private name: string;
    public surname : string;
    public tckn :string;

    get Name() : string {
        return this.name;
    }

    set Name(setName: string){
        this.name = setName;
    }

    public abstract MaasHesapla(calistigiGun:number):number;

    // constructor(prmName : string, prmSurname :string) {
    //     this.name=prmName;
    //     this.surname = prmSurname;
    // }

    // public myOverdose1() : void{

    // }

    // public myOverdose1(prmSayi : number) : void{

    // }
}