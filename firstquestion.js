
// اجابة السؤال الأول

let age = 18
console.log(age);
console.log( `ن أبلغ 5 أضعاف عمري سيبدأ زحل باستقبال المبرمجين على سطح  ${age*5}` );
let value= 2021-1969
console.log(`${2021-1969}هو عدد الأعوام التي مرت على صعود الإنسان على سطح القمر 🌑`);



//third question
function submit() {

    let q =parseInt(document.getElementById("Quizes").value)
    let m =parseInt(document.getElementById("Midterm").value)
    let f =parseInt(document.getElementById("FinalTest").value)
    let o =parseInt(document.getElementById("Oral").value)
    
    let total=q+m+f+o
    
    if(total<=100 && total>=90 ){
        document.getElementById("total_grades").innerText =total
        document.getElementById("final_grade").innerText =`A`
      }
      else if(total>=80){
       document.getElementById("total_grades").innerText =total
       document.getElementById("final_grade").innerText =`B`
      }
      else if(total>=70){
       document.getElementById("total_grades").innerText =total
       document.getElementById("final_grade").innerText =`C`
      }
      else if(total>=60){
        document.getElementById("total_grades").innerText =total
        document.getElementById("final_grade").innerText =`D`
      }
      else{
       document.getElementById("total_grades").innerText =total
       document.getElementById("final_grade").innerText =`F`
      }
    }