function gerarTabuada(){
  let i = 1;
  
  let  resultado="";
    while (i<=10){
      let j = 1;
      
      resultado += `<div class="card-tabuada"><H2>Tabuado do ${i}</H2>`;
      while (j<=10){
        
        let produto = i*j;
        resultado += `<p><strong>${i} x ${j} = ${produto} </strong></p>`
        j++;
      }
      document.getElementById("painel").innerHTML = resultado 
      i++;
      resultado += `</div>`;
    }
    
}