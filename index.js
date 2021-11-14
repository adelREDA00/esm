//4eme 
const Qsa = document.querySelector(".Qsante")
const Qmar = document.querySelector(".Qmarketing")
const Qst = document.querySelector(".Qstrategies")
//
const home = document.querySelector(".schedule__container")
const topInfo = document.querySelector(".days")
const day = document.querySelector(".day")
const Hbtn = document.querySelector(".lG")
const prest = document.querySelector(".Prest")
const dist = document.querySelector(".Dist")
const stat = document.querySelector(".Stat")
//subject constracteur fnc
function Subject (n, p, i, m,g,T,l,STATse) {
    this.name = n;
    this.prof = p;
    this.id = i;
    this.mdp = m;
    this.email=g;
    this.time=T;
    this.lien=l;
    this.EandS = STATse;
  }
  let nothing =new Subject('-','-','-','-','-','-',[0,0])
  //////////////////// 4 eme ////////////////
    //stat calcul

let succes=[
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]
let echouer=[
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]
// MARKS DATA
let santeStat = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
]
let straeStat = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
]
let markStat = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
]
//
//second chart
/*let count=[
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
]
let temparr



function secondStat(arr){
arr.forEach((e,index)=>{
  e=Array.from({length: 32}, () => Math.floor(Math.random() * 20));
  e.sort(function(a, b){return a-b})
    for (let i =0;i<e.length;i++){

      let num = e[i]
      count[index][num]= count[index][num]? count[index][num]+1:1
    }
  


})

temparr = [...arr]
temparr.forEach((e)=>{
 for(let i=0;i<e.length;i++){
   for(let j=0;j<e.length;j++){
     if(i!==j){
       if(e[i]===e[j]){
         e.splice(j,1)
       }
     }
   }
 
 }
})

console.log(temparr);
console.log(count);
}*/
//
let nOFs
let nOFf
//just a tets data
function creatingstat(module){
  module.forEach((e,index)=>{
    e=Array.from({length: 32}, () => Math.floor(Math.random() * 20));
    e.forEach((n)=>{
      if(n>=10){
        succes[index].push(n)
      }else{
        echouer[index].push(n)
      }
    })
  
  })
  //num for chartjs
  nOFs = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
 ]
  nOFf = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
 ]

 nOFs.forEach((e,index)=>{
   e.push(succes[index].length)
 })
 nOFf.forEach((e,index)=>{
  e.push(echouer[index].length)
})
}
let x = santeStat
creatingstat(x)

  // 4eme strategie
  let QTecostra= new Subject('Economie et stratégie d entreprises','Dr Chenini M','878 0885 6764','ESMT','gmail@kalao.com','08:30',`<a href="https://us05web.zoom.us/j/87808856764?pwd=Nm5mSzJ0eElzcGVUdUI4RW5jcHIrdz09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[0][0],nOFf[0][0]])
  let QTcomporg= new Subject('Comportement organisationnel','Dr Aboura R',' 860 8263 7701','ESMT','gmail@kalao.com','08:30',`<a href="https://us05web.zoom.us/j/86082637701?pwd=ZHZKSFFqMFlXbnpZMjIwMDdITTE5Zz09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[1][0],nOFf[1][0]])
  let QTgocent= new Subject('Gouvernance d entreprise','Dr Selmi A','886 3218 8306','ESMT','gmail@kalao.com','10:00',`<a href="https://us05web.zoom.us/j/88632188306?pwd=eG91c081MlFNcHZmTTlqaGNSUWw5QT09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[2][0],nOFf[2][0]])
  let QTmacon= new Subject('Management des connaissances','Dr Rahali S',' 849 3455 4151','ESMT','gmail@kalao.com','13:00',`<a href="https://us05web.zoom.us/j/84934554151?pwd=L1pYNkNxR1NndkRueGZlUU82SHFDdz09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[3][0],nOFf[3][0]])
  let QTstat= new Subject('Statistique appliqué','Dr Belgherbi L',' 838 4814 3783','ESMT','gmail@kalao.com','13:00',`<a href="https://us05web.zoom.us/j/83848143783?pwd=ajZSMEJ0cnpjSDFjbWcxdklXenpiZz09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[4][0],nOFf[4][0]])
  let QTreduc= new Subject('Rédaction administrative','Dr khaldi M',' 822 2293 3782','ESMT','gmail@kalao.com','10:00',`<a href="https://us05web.zoom.us/j/82222933782?pwd=cldlQlUrN0xnTTJMTC9TVHdCa29xZz09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[5][0],nOFf[5][0]])
  let QTanglais= new Subject('Anglais','Dr iles A','841 1142 3311','ESMT','gmail@kalao.com','01:00 ',`<a href="https://us05web.zoom.us/j/84111423311?pwd=R2RwRXdQODFJL21vekNranBSZTh3dz09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[6][0],nOFf[6][0]])
  let QTinfo= new Subject('Informatique','Pf Souier M','865 9431 5690','ESMT','gmail@kalao.com','01:30',`<a href="https://us05web.zoom.us/j/86594315690?pwd=YU43M1BEZ3d5MitiRmxZcmkzclZ1UT09"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[7][0],nOFf[7][0]])

  //4eme sante
  let QSecoserv= new Subject('Management et économie des services','Dr Tahir F',' 812 5432 4933','ETD6Pj','gmail@kalao.com','10:00',`<a href="https://us05web.zoom.us/j/81254324933?pwd=YUZnbXI0Ym5lZ3dYenpnYmFwcm9TUT09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[0][0],nOFf[0][0]])
  let QSecosante = new Subject('Economie de la santé','DR Berached A',' 831 0142 4876','ESMT','gmail@kalao.com','13:00',`<a href="https://us05web.zoom.us/j/83101424876?pwd=bUIwcmp5TzhBMWFTU1N2OHpsMFpUQT09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[1][0],nOFf[1][0]])
  let QSmaetab =new Subject('Management des établissements de santé','Pr.Meziane T','859 6893 6858','ESMT','gmail@kalao.com','08:30',`<a href="https://us05web.zoom.us/j/85968936858?pwd=S3AxY25hSjdXRnJEelg5Zk53RDlZdz09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[2][0],nOFf[2][0]])
  let QScompta =new Subject('Comptabilité publique',' Dr Selhami S ',' 876 8010 8011','ESMT','gmail@kalao.com','08:00',`<a href="https://us05web.zoom.us/j/87680108011?pwd=YXFIdDl0aFREVWl6a0g0Rzk2RW03QT09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[3][0],nOFf[3][0]])
  let QSgest =new Subject('Gestion budgétaire des établissements de santé','Pr Meziane T','876 0572 7077','ESMT','gmail@kalao.com','08:30',`<a href="https://us05web.zoom.us/j/87605727077?pwd=YlJTSVJkb201TTE4NnkzV0FwOVAyZz09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[4][0],nOFf[4][0]])
  let QSreduc = new Subject('Rédaction administrative','Dr.Khaldi M',' 870 5246 7409','ESMT','gmail@kalao.com','01:00',`<a href="https://us05web.zoom.us/j/87052467409?pwd=RmoxbW9lWGFWQXptdWQxRlc4VHYyUT09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[5][0],nOFf[5][0]])
  let QSanglais = new Subject('Anglais','Dr iles A','871 3903 2696','ESMT','gmail@kalao.com','02:30',`<a href="https://us05web.zoom.us/j/87139032696?pwd=eEVTWlU0cnh5MnNKMElaV0VJR2ZIdz09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[6][0],nOFf[6][0]])
  let QSinfo = new Subject('Informatique','Pr souier M','865 9431 5690','ESMT','gmail@kalao.com','01:30',`<a href="https://us05web.zoom.us/j/86594315690?pwd=YU43M1BEZ3d5MitiRmxZcmkzclZ1UT09"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[7][0],nOFf[7][0]])
  //4eme marketing
  
  let QMredaction= new Subject('Redaction administrative','Dr khaldi M','819 1994 5788','esm12-4','gmail@kalao.com','08:30',`<a href="https://us05web.zoom.us/j/81919945788?pwd=WFEvejRITXBoZDJ4ODBLYyszVm4rZz09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[0][0],nOFf[0][0]])
  let QMservices = new Subject('Marketing des services','DR khedim A',' 899 4242 0399','ESMT','gmail@kalao.com','10:00',`<a href="https://us05web.zoom.us/j/89942420399?pwd=bzZwQU5hTWlZTXk0a2JqZ2NhYWRkQT09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[1][0],nOFf[1][0]])
  let QMsysteme =new Subject('Systeme information marketing','DR chekroun M',' 890 4074 1878','ESMT','gmail@kalao.com','08:30',`<a href="https://us05web.zoom.us/j/89040741878?pwd=eitMZHB1bkRLM044c2JpaWptU2ROQT09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[2][0],nOFf[2][0]])
  let QMpolitiques =new Subject('Politiques du produit','DR Bouanani H',' 839 4431 6138','ESMT','gmail@kalao.com','13:00',`<a href="https://us05web.zoom.us/j/88130654433?pwd=L05nVUlVR2lRcmtLaVhpdTV6QlUyUT09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[3][0],nOFf[3][0]])
  let QMconsommateur =new Subject('Comportement du consommateur','Pr Bbessouh N ',' 881 3065 4433','ESMT','gmail@kalao.com','08:30',`<a href="https://us05web.zoom.us/j/83944316138?pwd=RitocEw1K1hKcDZiT2hrNElEcFpsZz09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[4][0],nOFf[4][0]])
  let QMinfo =new Subject('Informatique','Pr Souier M','865 9431 5690','ESMT','gmail@kalao.com',' 01:30',`<a href="https://us05web.zoom.us/j/86594315690?pwd=YU43M1BEZ3d5MitiRmxZcmkzclZ1UT09"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[5][0],nOFf[5][0]])
  let QMdistrib = new Subject('Systemes de distribution','Dr Chikhi K',' 865 4857 1282','ESMT','gmail@kalao.com','08:30',`<a href="https://us05web.zoom.us/j/86548571282?pwd=VVhSclQyc3hyQTg3RGJQWm1YYmFaQT09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[6][0],nOFf[6][0]])
  let QManglais = new Subject('Anglais','Dr iles A','874 8892 3420','ESMT','gmail@kalao.com','11:30',`<a href="https://us05web.zoom.us/j/87488923420?pwd=VTltSFdMcVJJUEdwa3JFMUVoNkhZQT09#success"><i class='bx bxl-zoom zoom'></i></a>`,[nOFs[7][0],nOFf[7][0]])
  
  //PRESENTILEL
  //4eme marketing
  let QmarketingP = [
    QMredaction,QMservices,QMservices,
    nothing,nothing,nothing,
  
    QMsysteme,QMsysteme,nothing,
    QMpolitiques,QMpolitiques,nothing,
  
    QMconsommateur, QMconsommateur,QMinfo,
    nothing,nothing,nothing,
  
    QMdistrib,QMdistrib,QManglais,
    nothing,nothing,nothing,
  
    nothing,nothing,nothing,
    nothing,nothing,nothing,
  
    nothing,nothing,nothing,
    nothing,nothing,nothing,
  ]
  //4eme sante
  let QsanteP=[
    QScompta,QScompta,nothing,
    QSreduc,nothing,nothing,
    
    QSgest,QSgest,nothing,
    QSecosante,QSecosante,nothing,
  
    QSmaetab,QSmaetab,nothing,
    QSinfo,nothing,nothing,
  
    QSanglais,QSecoserv,QSecoserv,
    nothing,nothing,nothing,
  
    nothing,nothing,nothing,
    nothing,nothing,nothing,
  
    nothing,nothing,nothing,
    nothing,nothing,nothing,
  ]
  //4eme srategie
  let QstrategieP=[
    QTstat,QTstat,QTreduc,
    nothing,nothing,nothing,
  
    QTcomporg,QTcomporg,nothing,
    QTmacon,QTmacon,nothing,
  
    nothing,QTgocent,QTgocent,
    nothing,QTinfo,nothing,
  
    QTecostra,QTecostra,nothing,
    QTanglais,nothing,nothing,
  
    nothing,nothing,nothing,
    nothing,nothing,nothing,
  
    nothing,nothing,nothing,
    nothing,nothing,nothing,
  ]
  //DISANCIEL

    //4eme marketing
    let QmarketingD= [
      QMredaction,QMservices,nothing,
      nothing,nothing,nothing,
    
      QMsysteme,nothing,nothing,
      QMpolitiques,nothing,nothing,
    
      QMconsommateur,nothing,nothing,
      QMinfo,nothing,nothing,
    
      QMdistrib,nothing,QManglais,
      nothing,nothing,nothing,
    
      nothing,nothing,nothing,
      nothing,nothing,nothing,
    
      nothing,nothing,nothing,
      nothing,nothing,nothing,
    ]
    //4eme sante
    let QsanteD=[
      QScompta,nothing,nothing,
      QSreduc,nothing,nothing,
      
      QSgest,nothing,nothing,
      QSecosante,nothing,nothing,
    
    
      QSmaetab,nothing,nothing,
      QSinfo,nothing,nothing,
    
      nothing,QSecoserv,nothing,
      nothing,QSanglais,nothing,
    
      nothing,nothing,nothing,
      nothing,nothing,nothing,
    
      nothing,nothing,nothing,
      nothing,nothing,nothing,
    ]
    //4eme srategie
    let QstrategieD=[
      nothing,QTreduc,nothing,
      QTstat,nothing,nothing,
    
      QTcomporg,nothing,nothing,
      QTmacon,nothing,nothing,
    
      nothing,QTgocent,nothing,
      QTinfo,nothing,nothing,
    
      QTecostra,nothing,nothing,
      QTanglais,nothing,nothing,
    
      nothing,nothing,nothing,
      nothing,nothing,nothing,
    
      nothing,nothing,nothing,
      nothing,nothing,nothing,
    ]

  //events 
  //tracking the subject
  let moduleD
  let moduleP
  let statModul
  //
  Hbtn.addEventListener("click",()=>{
    location.reload();
  })
  Qsa.addEventListener('click',()=>{
    nav.classList.remove('show')
    toggle.classList.remove('clicked')
    navArr.classList.remove("up")
    moduleD = QsanteD
    moduleP = QsanteP
    creatPrest(QsanteP)
    animContainer()
    slides()
    animTopInfo()
    x=santeStat
  })
  Qmar.addEventListener('click',()=>{
    nav.classList.remove('show')
    moduleD = QmarketingD
    moduleP = QmarketingP
    creatPrest(QmarketingP)
    animContainer()
    slides()
    animTopInfo()
    x=markStat
    toggle.classList.remove('clicked')
    navArr.classList.remove("up")
  })
  Qst.addEventListener('click',()=>{
    nav.classList.remove('show')
    moduleD = QstrategieD
    moduleP = QstrategieP
    creatPrest(QstrategieP)
    animContainer()
    slides()
    animTopInfo()
    x=straeStat
    toggle.classList.remove('clicked')
    navArr.classList.remove("up")
  })
  //pres and dist events btn
  prest.addEventListener("click",()=>{
    creatPrest(moduleP)
    animContainer()
    slides()
  })
  dist.addEventListener("click",()=>{
    console.log("gi");
    creatDist(moduleD)
    Tguide()
    animContainer()
    slides()
  })

  //creat Dist
  function creatDist(anne){
    home.innerHTML=   `
    <div class="swiper">
     <!-- Additional required wrapper -->
     <div class="swiper-wrapper">
       <!-- Slides -->
       <div class="swiper-slide">
           <div class="schedul-time">
               <div class="time">
               <div class="hours"></div>
               <div class="task"></div>
             </div>
             <div class="time">
                 <div class="hours"></div>
                 <div class="task"></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task" ></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task"></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task "></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task "></div>
               </div>
           </div>
           <div class="subject-info">
           <h3 class="Tguide">click on the subject to get more info </h3>
           </div>
       </div>
       <div class="swiper-slide">
         <div class="schedul-time">
         <div class="time">
         <div class="hours"></div>
         <div class="task"></div>
       </div>
       <div class="time">
           <div class="hours"></div>
           <div class="task"></div>
         </div>
         <div class="time">
           <div class="hours"></div>
           <div class="task" ></div>
         </div>
         <div class="time">
           <div class="hours"></div>
           <div class="task"></div>
         </div>
         <div class="time">
           <div class="hours"></div>
           <div class="task "></div>
         </div>
         <div class="time">
           <div class="hours"></div>
           <div class="task "></div>
         </div>
         </div>
         <div class="subject-info">

         <h3 class="Tguide">click on the subject to get more info </h3>
         </div>

     </div>
     <div class="swiper-slide">
         <div class="schedul-time">
         <div class="time">
               <div class="hours"></div>
               <div class="task"></div>
             </div>
             <div class="time">
                 <div class="hours"></div>
                 <div class="task"></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task" ></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task"></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task "></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task "></div>
               </div>
         </div>
         <div class="subject-info">
         <h3 class="Tguide">click on the subject to get more info </h3>
         </div>
     </div>
     <div class="swiper-slide">
         <div class="schedul-time">
         <div class="time">
               <div class="hours"></div>
               <div class="task"></div>
             </div>
             <div class="time">
                 <div class="hours"></div>
                 <div class="task"></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task" ></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task"></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task "></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task "></div>
               </div>
         </div>
         <div class="subject-info">
         <h3 class="Tguide">click on the subject to get more info </h3>
         </div>
     </div>
     <div class="swiper-slide">
         <div class="schedul-time">
         <div class="time">
         <div class="hours"></div>
         <div class="task"></div>
       </div>
       <div class="time">
           <div class="hours"></div>
           <div class="task"></div>
         </div>
         <div class="time">
           <div class="hours"></div>
           <div class="task" ></div>
         </div>
         <div class="time">
           <div class="hours"></div>
           <div class="task"></div>
         </div>
         <div class="time">
           <div class="hours"></div>
           <div class="task "></div>
         </div>
         <div class="time">
           <div class="hours"></div>
           <div class="task "></div>
         </div>
         </div>
         <div class="subject-info">
         <h3 class="Tguide">click on the subject to get more info </h3>
         </div>
     </div>
     <div class="swiper-slide">
         <div class="schedul-time">
         <div class="time">
               <div class="hours"></div>
               <div class="task"></div>
             </div>
             <div class="time">
                 <div class="hours"></div>
                 <div class="task"></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task" ></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task"></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task "></div>
               </div>
               <div class="time">
                 <div class="hours"></div>
                 <div class="task "></div>
               </div>
         </div>
         <div class="subject-info">
         <h3 class="Tguide">click on the subject to get more info </h3>
         </div>
     </div>

     </div>
     <div class="swiper-pagination"></div>

</div>
`;
    const hours = document.querySelectorAll('.hours')
    const tasks = document.querySelectorAll('.task')
    hours.forEach((e,index)=>{
    e.innerHTML=`${anne[index].time}`
    })
    tasks.forEach(e=>{
      e.classList.add('distBack')
    })
   creatSchedul(anne)
  }
  
  //creating Present 
  function creatPrest(anne){
      home.innerHTML=   `
      <div class="swiper">
       <!-- Additional required wrapper -->
       <div class="swiper-wrapper">
         <!-- Slides -->
         <div class="swiper-slide">
             <div class="schedul-time">
                 <div class="time">
                 <div class="hours">8:30<br>-<br>10</div>
                 <div class="task"></div>
               </div>
               <div class="time">
                   <div class="hours">10<br>-<br>11:30</div>
                   <div class="task"></div>
                 </div>
                 <div class="time">
                   <div class="hours">11:30<br>-<br>13</div>
                   <div class="task" ></div>
                 </div>
                 <div class="time">
                   <div class="hours">13<br>-<br>14:30</div>
                   <div class="task"></div>
                 </div>
                 <div class="time">
                   <div class="hours">14:30<br>-<br>16</div>
                   <div class="task "></div>
                 </div>
                 <div class="time">
                   <div class="hours">16<br>-<br>17:30</div>
                   <div class="task "></div>
                 </div>
             </div>
             <div class="subject-info">
             <h4 class="Tguide">click on the subject to get more info </h4>
             </div>
         </div>
         <div class="swiper-slide">
           <div class="schedul-time">
           <div class="time">
           <div class="hours">8:30<br>-<br>10</div>
           <div class="task"></div>
         </div>
         <div class="time">
             <div class="hours">10<br>-<br>11:30</div>
             <div class="task"></div>
           </div>
           <div class="time">
             <div class="hours">11:30<br>-<br>13</div>
             <div class="task" ></div>
           </div>
           <div class="time">
             <div class="hours">13<br>-<br>14:30</div>
             <div class="task"></div>
           </div>
           <div class="time">
             <div class="hours">14:30<br>-<br>16</div>
             <div class="task "></div>
           </div>
           <div class="time">
             <div class="hours">16<br>-<br>17:30</div>
             <div class="task "></div>
           </div>
           </div>
           <div class="subject-info">
           <h4 class="Tguide">click on the subject to get more info </h4>
           </div>
  
       </div>
       <div class="swiper-slide">
           <div class="schedul-time">
           <div class="time">
           <div class="hours">8:30<br>-<br>10</div>
           <div class="task"></div>
         </div>
         <div class="time">
             <div class="hours">10<br>-<br>11:30</div>
             <div class="task"></div>
           </div>
           <div class="time">
             <div class="hours">11:30<br>-<br>13</div>
             <div class="task" ></div>
           </div>
           <div class="time">
             <div class="hours">13<br>-<br>14:30</div>
             <div class="task"></div>
           </div>
           <div class="time">
             <div class="hours">14:30<br>-<br>16</div>
             <div class="task "></div>
           </div>
           <div class="time">
             <div class="hours">16<br>-<br>17:30</div>
             <div class="task "></div>
           </div>
           </div>
           <div class="subject-info">
           <h4 class="Tguide">click on the subject to get more info </h4>
           </div>
       </div>
       <div class="swiper-slide">
           <div class="schedul-time">
           <div class="time">
           <div class="hours">8:30<br>-<br>10</div>
           <div class="task"></div>
         </div>
         <div class="time">
             <div class="hours">10<br>-<br>11:30</div>
             <div class="task"></div>
           </div>
           <div class="time">
             <div class="hours">11:30<br>-<br>13</div>
             <div class="task" ></div>
           </div>
           <div class="time">
             <div class="hours">13<br>-<br>14:30</div>
             <div class="task"></div>
           </div>
           <div class="time">
             <div class="hours">14:30<br>-<br>16</div>
             <div class="task "></div>
           </div>
           <div class="time">
             <div class="hours">16<br>-<br>17:30</div>
             <div class="task "></div>
           </div>
           </div>
           <div class="subject-info">
           <h4 class="Tguide">click on the subject to get more info </h4>
           </div>
       </div>
       <div class="swiper-slide">
           <div class="schedul-time">
           <div class="time">
           <div class="hours">8:30<br>-<br>10</div>
           <div class="task"></div>
         </div>
         <div class="time">
             <div class="hours">10<br>-<br>11:30</div>
             <div class="task"></div>
           </div>
           <div class="time">
             <div class="hours">11:30<br>-<br>13</div>
             <div class="task" ></div>
           </div>
           <div class="time">
             <div class="hours">13<br>-<br>14:30</div>
             <div class="task"></div>
           </div>
           <div class="time">
             <div class="hours">14:30<br>-<br>16</div>
             <div class="task "></div>
           </div>
           <div class="time">
             <div class="hours">16<br>-<br>17:30</div>
             <div class="task "></div>
           </div>
           </div>
           <div class="subject-info">
           <h4 class="Tguide">click on the subject to get more info </h4>
           </div>
       </div>
       <div class="swiper-slide">
           <div class="schedul-time">
           <div class="time">
           <div class="hours">8:30<br>-<br>10</div>
           <div class="task"></div>
         </div>
         <div class="time">
             <div class="hours">10<br>-<br>11:30</div>
             <div class="task"></div>
           </div>
           <div class="time">
             <div class="hours">11:30<br>-<br>13</div>
             <div class="task" ></div>
           </div>
           <div class="time">
             <div class="hours">13<br>-<br>14:30</div>
             <div class="task"></div>
           </div>
           <div class="time">
             <div class="hours">14:30<br>-<br>16</div>
             <div class="task "></div>
           </div>
           <div class="time">
             <div class="hours">16<br>-<br>17:30</div>
             <div class="task "></div>
           </div>
           </div>
           <div class="subject-info">
           <h4 class="Tguide">click on the subject to get more info </h4>
           </div>
       </div>
  
       </div>
       <div class="swiper-pagination"></div>
  
  </div>
  `;
    DispalyTopInfo()
    creatSchedul(anne)
  }
  //show top info
 function DispalyTopInfo(){
  topInfo.style.display=`grid`
  Tguide()
}

//creat the core SCHEDUl
  function creatSchedul(anne){
    day.style.display=`block`
    day.innerText=`Dimanche`
    stat.style.display=`none`

    const subjectInfo = document.querySelectorAll(".subject-info")
    const tasks = document.querySelectorAll('.task')

    tasks.forEach((e,index)=>{
        e.innerText=`${anne[index].name}`
        e.dataset.position = index;
        e.addEventListener("click",(c)=>{
          stat.style.display=`block`
          gsap.from(".Stat", {
            opacity: 0, 
            scale:0, 
            duration: .15
          });
          gsap.from(".subject-info", {
            opacity: 0, 
            y:100, 
            duration: .3,
          });
         const Csubject=  c.currentTarget.innerText
         const place = c.currentTarget.dataset.position
         statModul = anne[place]
         subjectInfo.forEach((s)=>{
          s.innerHTML=
          `<h2>${Csubject}</h2>
          <h3>${anne[place].prof} </h3>
          <div class="zoom-info">
          Lien Direct : ${anne[place].lien} <br>
          OR <br>
          id : ${anne[place].id} <br>
          Cle : ${anne[place].mdp}<br>
          Email : ...........@gmail.com
          </div>`
         })
        })
       
    })
  }
  const days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Samedi'] 
  //slides
  function slides(){
      const swiper = new Swiper('.swiper', {
          // Optional parameters
          direction: 'horizontal',
          loop: false,
        
          //  pagination
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
         
        })
        //days
        swiper.on('activeIndexChange', function () {
          day.innerText=`${days[swiper.activeIndex]}`
        });
  };
//navbar
const navArr = document.querySelector(".navArr")
const toggle = document.getElementById('4eme')
let  nav = undefined;
const showMenu = ( navId) =>{
      nav = document.getElementById(navId)
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
            toggle.classList.toggle('clicked')
            navArr.classList.toggle("up")
        })   
}
showMenu('nav-menu')

//stat 
let descArr=[`<h4> number of students who passed</h4><p>Demo data</p>`,`<h4>moyenne du module</h4>`]
stat.addEventListener("click",()=>{
  home.innerHTML=`
  <!-- Slider main container -->
<div class="STATswiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide stat">
    <div class="chart-theme"></div>
    <div class="chart-canvas">
    <canvas  id="myChart1" width="400" height="400"></canvas>
    </div>
    </div>
    <div class="swiper-slide stat">
    <div class="chart-theme"></div>
    <div class="chart-canvas">
    <canvas id="myChart2" width="400" height="400"></canvas>
    </div>
    </div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>
</div>
  `
  statCharts(statModul.EandS)
  const chartstheme = document.querySelectorAll(".chart-theme")
  chartstheme.forEach((e)=>{
    e.innerHTML=`
    <div class="module-name"><h3>${statModul.name} </h3></div>
    <div class="chart-desc"></div>
    `
    const chartD = document.querySelectorAll(".chart-desc")
    chartD.forEach((e,index)=>{
      e.innerHTML=descArr[index]
    })
  })
  statSlides()
  gsap.from('.chart-canvas', {opacity: 0, duration: .8, scale: 1.15})
})

function statSlides(){
  const swiper = new Swiper('.STATswiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
}

function statCharts(reANDes ){
  //first chart
  var firstChart = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(firstChart, {
  type: 'doughnut',
  data : {
    labels: [
      `${reANDes[0]} passed the subject`,
      `${reANDes[1]} failed the subject`,
    ],
    datasets: [{
      label: 'My First Dataset',
      data: reANDes,
      backgroundColor: [
        '#6FFACC',
        '#2F4858',
      ],
      hoverOffset: 4,
      borderWidth:7,
      cutout: '80%',
    }]
  },
  options: {
    plugins: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: `15px`,
                }
            }
        }
    }
}
});

//2nd chart
var SndChart = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(SndChart, {
    type: 'bar',
    data: {
        labels: [3,6,8,10,11,12,14,17] ,
        datasets: [{
            label: 'Nm of students',
            data: [2, 4, 8, 7, 14,2,6,4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

/*-- ANIMATE GSAP --*/

/*TEXT*/ 
gsap.from('.home__title', {opacity: 0, duration: 1, delay: .5, y: 50})
gsap.from('.home__description', {opacity: 0, duration: 1.5, delay: .8, y: 50})

/*IMG AIRPOD*/
gsap.from('.airpod1', {opacity: 0, duration: 2, delay: 1.5, y: -40})

/*NAV*/
gsap.from('.nav__logo', {opacity:0, duration: 1.9, delay: 1.3, y: 25});
gsap.from('.nav__btn', {opacity:0, duration: 1.9, delay: 1.3, y: 25});
gsap.from('.sm', {opacity:0, duration: 1.1, delay: 1.5, y: 25,stagger: .1});
gsap.from('.Pfooter', {opacity:0, duration: 1.4, delay: 1.3, y: 25});

 //animation sc Container
 function animContainer(){
  gsap.from('.schedule__container', {opacity: 0, duration: .2, scale: .5})
}
function animTopInfo(){
  gsap.from('.typeBtn', {opacity: 0, duration: .25, scale:0,stagger:.2})

}
function Tguide(){
  gsap.from(".Tguide", {duration: 1.5, text: "..........",delay: 1.4, ease: "ease"});
}

gsap.from(".title", {duration: 1.4, text: "", ease: "none"});
gsap.from(".Mlogo", {
  x: 100, 
  duration: 1.2
})