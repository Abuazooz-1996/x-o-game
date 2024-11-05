const grids_squares=document.getElementsByClassName("square");

// let a=[1,2,3,4,5,6,7]

// a.forEach((s)=>{
//     console.log(s)
// })

let square_array=[
    "0","1","2",
    "3","4","5",
    "6","7","8",
]
let current_value="x"
// turn.innerHTML=current_value
let game_is_ginished=false

for(let item of grids_squares){
    item.addEventListener("click",()=>{
      let value=item.getAttribute("value")
    //   console.log(value)
    if(game_is_ginished==true){
        return
    }
    if(square_array[value-1]=="x"||square_array[value-1]=="o"){
        return
    }
      let value_content=document.querySelector(`.square[value="${value}"]`)
      value_content.innerHTML=current_value



      square_array[value-1]=current_value
      console.log(square_array)

     result()
        if(current_value=="x"){
            current_value="o"
        }else{
            current_value="x"
        }
     document.querySelector(".instruction span").textContent=current_value

    })
}

function result(){

// //first way if 
//        //rowes
//       // if for(o)
//     if((square_array[0]=="o" && square_array[1]=="o" && square_array[2]=="o") ||
//        (square_array[3]=="o" && square_array[4]=="o" && square_array[5]=="o") ||
//        (square_array[6]=="o" && square_array[7]=="o" && square_array[8]=="o") ||
//        //colums
//        (square_array[0]=="o" && square_array[3]=="o" && square_array[6]=="o") ||
//        (square_array[1]=="o" && square_array[4]=="o" && square_array[7]=="o") ||
//        (square_array[2]=="o" && square_array[5]=="o" && square_array[8]=="o") ||
//        //dignal
//        (square_array[0]=="o" && square_array[4]=="o" && square_array[8]=="o") ||
//        (square_array[2]=="o" && square_array[4]=="o" && square_array[6]=="o") 
//        ){
//         alert("the winner o")
//     }


//     // if for(o)
//           if((square_array[0]=="x" && square_array[1]=="x" && square_array[2]=="x") ||
//           (square_array[3]=="x" && square_array[4]=="x" && square_array[5]=="x") ||
//           (square_array[6]=="x" && square_array[7]=="x" && square_array[8]=="x") ||
//           //colums
//           (square_array[0]=="x" && square_array[3]=="x" && square_array[6]=="x") ||
//           (square_array[1]=="x" && square_array[4]=="x" && square_array[7]=="x") ||
//           (square_array[2]=="x" && square_array[5]=="x" && square_array[8]=="x") ||
//           //dignal
//           (square_array[0]=="x" && square_array[4]=="x" && square_array[8]=="x") ||
//           (square_array[2]=="x" && square_array[4]=="x" && square_array[6]=="x") 
//           ){
//            alert("the winner x")
//           }
    
     //rows
     if(square_array[0]==square_array[1] && square_array[0]==square_array[2]||
        square_array[3]==square_array[4] && square_array[3]==square_array[5]||
        square_array[6]==square_array[7] && square_array[6]==square_array[8]||

        //colum
        square_array[0]==square_array[3] && square_array[0]==square_array[6]||
        square_array[1]==square_array[4] && square_array[1]==square_array[7]||
        square_array[2]==square_array[5] && square_array[2]==square_array[8]||

        //diagonal
        square_array[0]==square_array[4] && square_array[0]==square_array[8]||
        square_array[2]==square_array[4] && square_array[2]==square_array[6]
     ){
        let winner=current_value=="o"?"o":"x"
        game_is_ginished=true
        // alert(`(${winner}) won!`)
        alertify.alert(`(${winner}) won!`)

    }

    let isdaraw=true
    for(square of square_array){
        if(square!="x" && square!="o"){
            isdaraw=false
        }
    }

    if(isdaraw){
        game_is_ginished=true
        // alert("the game draw")
        alertify.alert("Draw")
    }


    
}

document.getElementById("reset-btn").addEventListener("click",function(){
    reset()


})

function reset(){
    for(item of grids_squares){
        let value=item.getAttribute("value")//===ex:value is 4
        let content_of_item=document.querySelector(`.square[value="${value}"]`)
        content_of_item.innerHTML=""
        square_array=[
            "0","1","2",
            "3","4","5",
            "6","7","8",
        ]
      game_is_ginished=false
      current_value="x"
      document.querySelector(".instruction span").textContent=current_value
    }



}



