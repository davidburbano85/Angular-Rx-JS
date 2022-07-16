import{Observable, Observer, } from "rxjs";



const myObserver: Observer<any>=
{
    next: x => 
    {
        if (!isNaN(x)) {
            console.log(x + 10);

        } else {
            console.log("`${x}`: no es un numero, ponele voluntad");

        }
    },
       error: err => console.error("no es asi jaja", err),
       
       complete:() =>console.log("mi trabajo aqui termino"),
       
    
    
};

const myObservable = new Observable
    (
        subscriber =>
            {
                subscriber.next(7);
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
    myObservable.subscribe(myObserver);
    myObservable2.subscribe(myObserver);