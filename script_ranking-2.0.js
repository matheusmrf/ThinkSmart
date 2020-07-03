db_notas={};
notasJSON = localStorage.getItem("db_notas");
if(!notasJSON)
{
    db_notas={notas: []};
    console.log(db_notas);
}
else
{
    db_notas = JSON.parse(notasJSON);
}


function writeText()
{
    let divTela = document.getElementById('rankingBox');
    let texto = '';
    texto += `<div class="col-1"></div>
                
    <div class="col-10" id="Doc">
        <id class="For">

            <form name="theForm" id="theForm" action="#">
                <div class="titleForm">
                <h1>Nos dê sua opinião!</h1>
                <h5>*Não se esqueça de marcar todas!</h5>
                </div>
                <div class="styleForm">
                    <p>
                        Utilidade do Produto:
                    </p>
                    
                        <p>
                        `;
    for(i=0;i<10;i++)
    {
        texto+=`<input type="radio" id="notaUtil${i+1}" name="notaUtil" class="radios" value="${i+1}" required/>
                <label for="notaUtil${i+1}">${i+1}</label>`;
    }
    texto += `</p>
    </div>
    <div class="styleNota">
    <p>
        Nota Média: <span id="notaUtilMedia"></span> 
    </p>
    </div>
    <div class="styleForm">
        <p>
            Apresentação do Produto:
        </p>
            <p>`;
    for(i=0;i<10;i++)
    {
        texto+=`<input type="radio" id="notaApres${i+1}" name="notaApres" class="radios" value="${i+1}" required/>
                    <label for="notaApres${i+1}">${i+1}</label>`;
    }
    texto+= `</p>
    </div>
    <div class="styleNota">
    <p>
        Nota Média: <span id="notaApresMedia"></span> 
    </p>
    </div>
    <div class="styleForm">
        <p>
            Interesse :
        </p>
            <p>`;
    for(i=0;i<10;i++)
    {
        texto += ` <input type="radio" id="notaInter${i+1}" name="notaInter" class="radios" value="${i+1}" required/>
<label for="notaInter${i+1}">${i+1}</label>`;
    }
    texto += `</p>
    </div>
    <div class="styleNota">
    <p>
        Nota Média: <span id="notaInterMedia"></span> 
    </p>
    </div>
    <div class="styleForm">
        <p>
            Proposta:
        </p>
            <p>`;
    for(i=0;i<10;i++)
    {
        texto += `<input type="radio" id="notaProp${i+1}" name="notaProp" class="radios" value="${i+1}" required/>
                    <label for="notaProp${i+1}">${i+1}</label>`;
    }
    texto += `</p>
    </div>
    <div class="styleNota">
    <p>
        Nota Média: <span id="notaPropMedia"></span> 
    </p>
    </div>
    <div class="styleForm">
        <p>
            Execução do Produto:
        </p>
            <p>`;
    for(i=0;i<10;i++)
    {
        texto += `<input type="radio" id="notaExec${i+1}" name="notaExec" class="radios" value="${i+1}" required/>
                    <label for="notaExec${i+1}">${i+1}</label>`;
    }
    texto += `</p>
        </div>
        <div class="styleNota">
        <p>
            Nota Média: <span id="notaExecMedia"></span> 
        </p>
        </div>
        <br>
        <div class="styleNota">
        <h1>
            Nota Final: <span id="notaFinal"></span>/10
        </h1>
        </div>
        <div class="styleBtn">
            <p>
                <button type="submit" id="btnSub">Enviar</button>
            </p>
            <p id="btnMsg">
                
            </p>
        </div>
    </form>
    </id>`;
    divTela.innerHTML=texto;
    //console.log(texto);
}

function updateDOM(thisIndex)
{
    let thisNota = JSON.parse(localStorage.getItem('db_notas')).notas[thisIndex];
    let notaFinalUtil=document.getElementById("notaUtilMedia");
    let notaFinalApres=document.getElementById("notaApresMedia");
    let notaFinalInter=document.getElementById("notaInterMedia");
    let notaFinalProp=document.getElementById("notaPropMedia");
    let notaFinalExec=document.getElementById("notaExecMedia");
    let notaFinal=document.getElementById("notaFinal");
    notaFinalUtil.innerHTML = thisNota.objNotaUtil.media.toFixed(1);
    notaFinalApres.innerHTML = thisNota.objNotaApres.media.toFixed(1);
    notaFinalInter.innerHTML = thisNota.objNotaInter.media.toFixed(1);
    notaFinalProp.innerHTML = thisNota.objNotaProp.media.toFixed(1);
    notaFinalExec.innerHTML = thisNota.objNotaExec.media.toFixed(1);
    notaFinal.innerHTML = thisNota.notaTotal;
}


function submitNota(event)
{
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault ();

    // Util, Apres, Inter, Prop, Exec

    let notaUtil,notaApres,notaInter,notaProp,notaExec;
    let totalUtil=0,totalApres=0,totalInter=0,totalProp=0,totalExec=0;
    let clicksUtil=0,clicksApres=0,clicksInter=0,clicksProp=0,clicksExec=0;
    let mediaUtil=0,mediaApres=0,mediaInter=0,mediaProp=0,mediaExec=0;
    let post = JSON.parse(localStorage.getItem('postTo'));
    let notaID = post.id;
    

    for(i=0;i<10;i++)
    {
        if(document.getElementById(`notaUtil${i+1}`).checked)
        {
            notaUtil = parseInt(document.getElementById(`notaUtil${i+1}`).value);
        }
        if(document.getElementById(`notaApres${i+1}`).checked)
        {
            notaApres = parseInt(document.getElementById(`notaApres${i+1}`).value);
        }
        if(document.getElementById(`notaInter${i+1}`).checked)
        {
            notaInter = parseInt(document.getElementById(`notaInter${i+1}`).value);
        }
        if(document.getElementById(`notaProp${i+1}`).checked)
        {
            notaProp = parseInt(document.getElementById(`notaProp${i+1}`).value);
        }
        if(document.getElementById(`notaExec${i+1}`).checked)
        {
            notaExec = parseInt(document.getElementById(`notaExec${i+1}`).value);
        }
    }

    let objNotaUtil,objNotaApres,objNotaInter,objNotaProp,objNotaExec;
    let hasNota = false, thisIndex;
    for(i=0;i<db_notas.notas.length;i++)
    {
        if(db_notas.notas[i].id==notaID){
            hasNota=true;
            thisIndex=i;
        }
    };
    console.log(hasNota);

    // Util, Apres, Inter, Prop, Exec

    if(hasNota)
    {
        let thisNota = JSON.parse(localStorage.getItem('db_notas')).notas[thisIndex];

        totalUtil=thisNota.objNotaUtil.total+notaUtil;
        clicksUtil=thisNota.objNotaUtil.clicks+1;
        mediaUtil=totalUtil/clicksUtil;
        objNotaUtil = {"nota":notaUtil,"total":totalUtil,"clicks":clicksUtil,"media":mediaUtil};

        totalApres=thisNota.objNotaApres.total+notaApres;
        clicksApres=thisNota.objNotaApres.clicks+1;
        mediaApres=totalApres/clicksApres;
        objNotaApres = {"nota":notaApres,"total":totalApres,"clicks":clicksApres,"media":mediaApres};
        
        totalInter=thisNota.objNotaInter.total+notaInter;
        clicksInter=thisNota.objNotaInter.clicks+1;
        mediaInter=totalInter/clicksInter;
        objNotaInter = {"nota":notaInter,"total":totalInter,"clicks":clicksInter,"media":mediaInter};

        totalProp=thisNota.objNotaProp.total+notaProp;
        clicksProp=thisNota.objNotaProp.clicks+1;
        mediaProp=totalProp/clicksProp;
        objNotaProp = {"nota":notaProp,"total":totalProp,"clicks":clicksProp,"media":mediaProp};

        totalExec=thisNota.objNotaExec.total+notaExec;
        clicksExec=thisNota.objNotaExec.clicks+1;
        mediaExec=totalExec/clicksExec;
        objNotaExec = {"nota":notaExec,"total":totalExec,"clicks":clicksExec,"media":mediaExec};

        let notaTotal = ((objNotaUtil.media + objNotaApres.media + objNotaInter.media + objNotaProp.media + objNotaExec.media)/5.0).toFixed(1); 

        let newNota = {"id":notaID,"objNotaUtil":objNotaUtil,"objNotaApres":objNotaApres,"objNotaInter":objNotaInter,"objNotaProp":objNotaProp,"objNotaExec":objNotaExec,"notaTotal":notaTotal};
        console.log(newNota);
        db_notas.notas[thisIndex]=newNota;
        localStorage.setItem('db_notas',JSON.stringify(db_notas));
    }
    else
    {
        totalUtil+=notaUtil;
        clicksUtil++;
        mediaUtil=totalUtil/clicksUtil;
        objNotaUtil = {"nota":notaUtil,"total":totalUtil,"clicks":clicksUtil,"media":mediaUtil};
        
        totalApres+=notaApres;
        clicksApres++;
        mediaApres=totalApres/clicksApres;
        objNotaApres = {"nota":notaApres,"total":totalApres,"clicks":clicksApres,"media":mediaApres};

        totalInter+=notaInter;
        clicksInter++;
        mediaInter=totalInter/clicksInter;
        objNotaInter = {"nota":notaInter,"total":totalInter,"clicks":clicksInter,"media":mediaInter};

        totalProp+=notaProp;
        clicksProp++;
        mediaProp=totalProp/clicksProp;
        objNotaProp = {"nota":notaProp,"total":totalProp,"clicks":clicksProp,"media":mediaProp};

        totalExec+=notaExec;
        clicksExec++;
        mediaExec=totalExec/clicksExec;
        objNotaExec = {"nota":notaExec,"total":totalExec,"clicks":clicksExec,"media":mediaExec};
        
        let notaTotal = ((objNotaUtil.media + objNotaApres.media + objNotaInter.media + objNotaProp.media + objNotaExec.media)/5.0).toFixed(1); 

        let newNota = {"id":notaID,"objNotaUtil":objNotaUtil,"objNotaApres":objNotaApres,"objNotaInter":objNotaInter,"objNotaProp":objNotaProp,"objNotaExec":objNotaExec,"notaTotal":notaTotal};
        console.log(newNota);
        db_notas.notas.push(newNota);
        localStorage.setItem('db_notas',JSON.stringify(db_notas));
    }
    
    alert("Obrigado pelo feedback!");
    window.location.href="newpage.html";
}

onload = () => {
    writeText();
    let notaID = post.id;
    document.getElementById ('theForm').addEventListener ('submit', submitNota);
    let hasNota = false, thisIndex;
    for(i=0;i<db_notas.notas.length;i++)
    {
        if(db_notas.notas[i].id==notaID){
            hasNota=true;
            thisIndex=i;
        }
    };
    if(hasNota)
    {
        updateDOM(thisIndex);
    }
    else
    {
        $(".styleNota").hide();
    }
}

