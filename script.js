const form=document.querySelector("form")
var fileInput=form.querySelector('.fileInput')
 var progressArea=document.querySelector('.progress-area')
var uploadArea=document.querySelector('.upload-area')
form.addEventListener("click",()=>{
    fileInput.click();
})
fileInput.onchange=({target})=>{
    console.log(target.files)
    let file=target.files[0];
    if(file){//iffile is selected
        let fileName=file.name;//geting selected file name
        //console.log(fileName)
        uploads(fileName)
    }
}