// let x:any=6
// x = "MARWA"
// console.log(typeof x)

// let z = ():void=>{

// }

// function test():void{}

//--strictPropertyInitialization

// class Student{
//     readonly x:number = 7
//     constructor(private name:string, private age:number){  }
//     show(): void{
//         console.log(`name is ${this.name} and age is ${this.age} ${this.x}`)
//     }
// }

// const marwa = new Student("marwa", 36)
// marwa.show()

// const nouran = new Student("nouran", 26)
// nouran.show()

// class Teacher{
//     constructor(protected tname:string, protected tsalary:number){ }
//     editTeacherName(newName:string){
//         console.log('teacher')
//         this.tname = newName
//     }
//     test():void{}
// }
// class Course extends Teacher{
//     //name, final grade, teacher, num of hours
//     static xt =1
//     constructor(private _name:string="",
//     private _finalGrade:number[]=[],
//     private _numOfHours:number=0,
//     teacherName:string="m", teacherSalary:number=1000 
//     ){
//         super(teacherName, teacherSalary)
//         Course.xt++
//     }
//     set name(val:string){this._name = val}
//     get name():string{ return this._name}
//     get teachName():string{return this.tname}
//     getAllData():String{
//         return `cName : ${this._name} and teacher ${this.tname}`
//     }
//     editTeacherName(newName:string){
//         console.log('course')
//         // super.editTeacherName(newName)
//         super.test()
//     }
// }


// let x = new Course('node', [100], 120, "marwa", 0)
// let y = new Teacher('m', 1520)
// Course.xt
// x.name = "marwa"
// x.editTeacherName("nouran")
// y.editTeacherName('ahmed')


/*
categories => name, id
Product => name, price, category id, cat name, sizes: [{size, quantity}]

add category
count all category
add product
count products
add size object
delete size
 */

// interface Sizes{
//     size:string|number
//     q:number
// }

// class Product{
//     static counter:number = 0
//     private size:Sizes[] = []
//     constructor( private name: string ,s:Sizes[] ){
//         Product.counter++
//         this.size=s
//     }
//     addSize(singleSize: Sizes):void{
//         this.size.push(singleSize)
//     }
// }

// let p = new Product('x', [{size:'l', q:5}, {size:"m", q:20}])
// console.log(Product.counter)
// p.addSize({size:5, q:10})
// console.log(p)


// interface X{
//     x():void
//     y():number
// }

// class Z implements X{
//     x():void{}
//     y():number{return 5}
// }

//abstract
abstract class C{
    abstract show():string
    test():void{console.log("test")}
}

class Z extends C{
         show():string{return "hello"}

}

















