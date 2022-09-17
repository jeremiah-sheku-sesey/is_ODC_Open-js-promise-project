let ourCodingList ={
    frontend: ['HTML', 'CSS', 'JS'],
    myCMS: ['Wordpress', 'O_A', 'Com skills']
}

let ODC_is_open = true;

let myPromiseFunction =(time)=>{
    return new Promise((resolve,reject)=>{
        if(ODC_is_open){
            setTimeout(()=>{
                 console.log(`we're open`)
                resolve(console.log('get a desk and turn on your computer, start to code because coding is fun!'))
            },time)
        }else{
            reject(console.log('get out!'))
        }
    })
}

myPromiseFunction(3000)
.then(()=>{
    setTimeout(()=>{
        console.log(`learn ${ourCodingList.frontend[0]} at your own pace`)
    },1000)
})
.then(()=>{
    setTimeout(()=>{
        console.log(`And learn ${ourCodingList.frontend[1]} at your own pace, only after your are done with HTML`)
    },7000)
})
.then(()=>{
    setTimeout(()=>{
        console.log(`Then learn ${ourCodingList.frontend[2]} at your own pace, only after your are done with CSS`)
    },3000)
})
.then(()=>{
    setTimeout(()=>{
        console.log(`learn ${ourCodingList.myCMS[0]} is awesome!`)
    },1000)
})
.catch(()=>{
    console.log('Sorry ODC is closed!')
})
 
.finally(()=>{
    setTimeout(()=>{
        console.log('Thanks!')
    },8000)
});