import{Observable, Observer, } from "rxjs";
import { map, filter } from "rxjs/operators";



const myObserver: Observer<any>=
{
    next: x => 
    {
        if (!isNaN(x)) {
            console.log(x + 10);

        } else {
            console.log(`'${x}': no es un numero, ponele voluntadddddddd`);

        }
    },
       error: err => console.error("no es asi jaja", err),
       
       complete:() =>console.log("mi trabajo aqui termino"),
       
    
    
};

const myObservable = new Observable
    (
        subscriber =>
            {
                subscriber.next("holis");
                subscriber.next(10);
                subscriber.next(20);
                subscriber.error("hola soy un error");
            }
    )

    const myObservable2 = new Observable
            (
                Subscriber=>
                    {
                        Subscriber.complete()
                    }
            )
    // myObservable.subscribe(myObserver);
    // myObservable2.subscribe(myObserver);
 myObservable.pipe          //**********pipe es el contenedor de los operadores
        (
            filter((r:any )=>!isNaN(r)),
            map((r: any)=>
                {
                    if (isNaN(r)) return 10;
                    return r; 
                })   
        ).subscribe(myObserver);
        

                               

            
                
        





        