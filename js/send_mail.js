window.onload = () => {
  forms = document.querySelectorAll(".msgForm");
  console.log(forms.length)
  forms.forEach(msgForm => {
      
      msgForm.querySelector(".proceedBtn").addEventListener('click', ()=>{
          msgType = msgForm.querySelector(".msgType").value;
          msgData = msgForm.querySelector(".msgData").value;
          if(msgData === ""){
              alert("Please fill all important fields");
          }
          else{                
              if(msgForm.querySelector(".msgOther")){
                  msgOther = msgForm.querySelector(".msgOther").value;
              }
              else {
                  msgOther = "NA";
              }
              mail_message = `Type: ${msgType}\nInput One: ${msgData}\nInput Two: ${msgOther}`;
              sendMessage(mail_message);
          }
          msgData = msgForm.querySelector(".msgData").value;
      })
  });
}
