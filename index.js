let array = [4,2,5,1,453 ,43 , 32, 1234 ,12 ,213 ,12, 342, 3]
let i = 0
let comparisions = 0
let tempVar = 0
let sorted = false


while (sorted == false)
{
    // console.log('C h e c k i n g . . .')
    i = 0
    while (i <= array.length-1)
    {
        if (i < array[i+1])
        {
            i++
            comparisions++
        }else{
            comparisions++
            break;
        }
    }

    if (i == array.length-1) { sorted = true; comparisions++; }

    i = 0

    while (i < array.length-1)
    {
        if (array[i] > array[i + 1])
        {
            tempVar = array[i];
            array[i] = array[i + 1];
            array[i+1] = tempVar;
        }
        i++
        comparisions++
    }
}

console.log('Сортировка завершена! Результат:')
console.log(array)
console.log("Сделано операций: " + comparisions)