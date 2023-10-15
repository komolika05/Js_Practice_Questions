//Write a program to give a pattern output

function pattern(a){
    for (let j=0;j<a;j++) {
        let row = " "
        for(let i=0; i<=j; i++){
            row += "*"
        }
        console.log(row)
    }

    for (let j=a;j>=0;j--) {
        let row = " "
        for(let i=0; i<=j; i++){
            row += "*"
        }
        console.log(row)
    }
}
pattern(5)