onload = () => {

    let valNotaUtil=0,valNotaTotalUtil=0,contClicksUtil=1,valNotaMediaUtil=0,doMedia;
    let notaFinalUtil=document.getElementById("notaUtilMedia");
    let showNotaUtil, notaDataUtil={};
    
    let valNotaApres=0,valNotaTotalApres=0,contClicksApres=1,valNotaMediaApres=0;
    let notaFinalApres=document.getElementById("notaApresMedia");
    let showNotaApres, notaDataApres={};

    let valNotaInter=0,valNotaTotalInter=0,contClicksInter=1,valNotaMediaInter=0;
    let notaFinalInter=document.getElementById("notaInterMedia");
    let showNotaInter, notaDataInter={};

    let valNotaProp=0,valNotaTotalProp=0,contClicksProp=1,valNotaMediaProp=0;
    let notaFinalProp=document.getElementById("notaPropMedia");
    let showNotaProp, notaDataProp={};

    let valNotaExec=0,valNotaTotalExec=0,contClicksExec=1,valNotaMediaExec=0;
    let notaFinalExec=document.getElementById("notaExecMedia");
    let showNotaExec, notaDataExec={};

    let theForm = document.forms.theForm;
    let j=0,checker=0;
    
    btnSub.disabled=true;
    function checkForNota()
    {
        for (j=0;j<50;j++){
            if(theForm[j].checked==false){
                checker++;
            }
        }
        if(checker>45){
            btnSub.disabled=true;
        }
        else{
            btnSub.disabled=false;
        }
        checker=0;
    }

    window.onclick = () => {
        checkForNota()
    }
   
    if(localStorage.getItem('notaAtualUtil'))
        {
            showNotaUtil = JSON.parse(localStorage.getItem('notaMediaUtil'));
            notaFinalUtil.innerHTML=showNotaUtil.toFixed(1);
        }

    if(localStorage.getItem('notaAtualApres'))
        {
            showNotaApres = JSON.parse(localStorage.getItem('notaMediaApres'));
            notaFinalApres.innerHTML=showNotaApres.toFixed(1);
        }
    
    if(localStorage.getItem('notaAtualInter'))
        {
            showNotaInter = JSON.parse(localStorage.getItem('notaMediaInter'));
            notaFinalInter.innerHTML=showNotaInter.toFixed(1);
        }
        
    if(localStorage.getItem('notaAtualProp'))
        {
            showNotaProp = JSON.parse(localStorage.getItem('notaMediaProp'));
            notaFinalProp.innerHTML=showNotaProp.toFixed(1);
        }

    if(localStorage.getItem('notaAtualExec'))
        {
            showNotaExec = JSON.parse(localStorage.getItem('notaMediaExec'));
            notaFinalExec.innerHTML=showNotaExec.toFixed(1);
        }

    btnSub.onclick = (evento) => {
            doMedia=1;
            if (notaUtil1.checked == true)
                valNotaUtil=+notaUtil1.value;
            else if (notaUtil2.checked == true)
                valNotaUtil=+notaUtil2.value;
            else if (notaUtil3.checked == true)
                valNotaUtil=+notaUtil3.value;
            else if (notaUtil4.checked == true)
                valNotaUtil=+notaUtil4.value;
            else if (notaUtil5.checked == true)
                valNotaUtil=+notaUtil5.value;
            else if (notaUtil6.checked == true)
                valNotaUtil=+notaUtil6.value;
            else if (notaUtil7.checked == true)
                valNotaUtil=+notaUtil7.value;
            else if (notaUtil8.checked == true)
                valNotaUtil=+notaUtil8.value;
            else if (notaUtil9.checked == true)
                valNotaUtil=+notaUtil9.value;
            else if (notaUtil10.checked == true)
                valNotaUtil=+notaUtil10.value;
            else
                doMedia=0
            if (doMedia==1)
            {
                if(localStorage.getItem('notaAtualUtil'))
                {
                    notaDataUtil =
                    {
                        notaUtil: valNotaUtil,
                        notaTotalUtil: valNotaUtil + JSON.parse(localStorage.getItem('notaTotalUtil')),
                        qtdNotasUtil: JSON.parse(localStorage.getItem('qtdNotasUtil'))+1,
                        notaMediaUtil: (valNotaUtil + JSON.parse(localStorage.getItem('notaTotalUtil')))/(JSON.parse(localStorage.getItem('qtdNotasUtil'))+1)
                    }
                }
                else
                {
                    notaDataUtil = 
                    {
                        notaUtil: valNotaUtil,
                        notaTotalUtil: valNotaTotalUtil+=valNotaUtil,
                        qtdNotasUtil: contClicksUtil++,
                        notaMediaUtil: valNotaMediaUtil=valNotaTotalUtil/(contClicksUtil-1)
                    }
                }
                JSON.stringify(localStorage.setItem('notaAtualUtil',notaDataUtil.notaUtil));
                JSON.stringify(localStorage.setItem('notaTotalUtil',notaDataUtil.notaTotalUtil));
                JSON.stringify(localStorage.setItem('qtdNotasUtil',notaDataUtil.qtdNotasUtil));
                JSON.stringify(localStorage.setItem('notaMediaUtil',notaDataUtil.notaMediaUtil));
                showNotaUtil = JSON.parse(localStorage.getItem('notaMediaUtil'));
                notaFinalUtil.innerHTML=showNotaUtil.toFixed(1);
            }
            
            doMedia=1;
            if (notaApres1.checked == true)
                valNotaApres=+notaApres1.value;
            else if (notaApres2.checked == true)
                valNotaApres=+notaApres2.value;
            else if (notaApres3.checked == true)
                valNotaApres=+notaApres3.value;
            else if (notaApres4.checked == true)
                valNotaApres=+notaApres4.value;
            else if (notaApres5.checked == true)
                valNotaApres=+notaApres5.value;
            else if (notaApres6.checked == true)
                valNotaApres=+notaApres6.value;
            else if (notaApres7.checked == true)
                valNotaApres=+notaApres7.value;
            else if (notaApres8.checked == true)
                valNotaApres=+notaApres8.value;
            else if (notaApres9.checked == true)
                valNotaApres=+notaApres9.value;
            else if (notaApres10.checked == true)
                valNotaApres=+notaApres10.value;
            else
            {
                doMedia=0;
            }
            if (doMedia==1)
            {
                if(localStorage.getItem('notaAtualApres'))
                {
                    notaDataApres =
                    {
                        notaApres: valNotaApres,
                        notaTotalApres: valNotaApres + JSON.parse(localStorage.getItem('notaTotalApres')),
                        qtdNotasApres: JSON.parse(localStorage.getItem('qtdNotasApres'))+1,
                        notaMediaApres: (valNotaApres + JSON.parse(localStorage.getItem('notaTotalApres')))/(JSON.parse(localStorage.getItem('qtdNotasApres'))+1)
                    }
                }
                else
                {
                    notaDataApres = 
                    {
                        notaApres: valNotaApres,
                        notaTotalApres: valNotaTotalApres+=valNotaApres,
                        qtdNotasApres: contClicksApres++,
                        notaMediaApres: valNotaMediaApres=valNotaTotalApres/(contClicksApres-1)
                    }
                }
                JSON.stringify(localStorage.setItem('notaAtualApres',notaDataApres.notaApres));
                JSON.stringify(localStorage.setItem('notaTotalApres',notaDataApres.notaTotalApres));
                JSON.stringify(localStorage.setItem('qtdNotasApres',notaDataApres.qtdNotasApres));
                JSON.stringify(localStorage.setItem('notaMediaApres',notaDataApres.notaMediaApres));
                showNotaApres = JSON.parse(localStorage.getItem('notaMediaApres'));
                notaFinalApres.innerHTML=showNotaApres.toFixed(1);
            }
            doMedia=1;
            if (notaInter1.checked == true)
                valNotaInter=+notaInter1.value;
            else if (notaInter2.checked == true)
                valNotaInter=+notaInter2.value;
            else if (notaInter3.checked == true)
                valNotaInter=+notaInter3.value;
            else if (notaInter4.checked == true)
                valNotaInter=+notaInter4.value;
            else if (notaInter5.checked == true)
                valNotaInter=+notaInter5.value;
            else if (notaInter6.checked == true)
                valNotaInter=+notaInter6.value;
            else if (notaInter7.checked == true)
                valNotaInter=+notaInter7.value;
            else if (notaInter8.checked == true)
                valNotaInter=+notaInter8.value;
            else if (notaInter9.checked == true)
                valNotaInter=+notaInter9.value;
            else if (notaInter10.checked == true)
                valNotaInter=+notaInter10.value;
            else
            {
                doMedia=0;
            }
            if (doMedia==1)
            {
                if(localStorage.getItem('notaAtualInter'))
                {
                    notaDataInter =
                    {
                        notaInter: valNotaInter,
                        notaTotalInter: valNotaInter + JSON.parse(localStorage.getItem('notaTotalInter')),
                        qtdNotasInter: JSON.parse(localStorage.getItem('qtdNotasInter'))+1,
                        notaMediaInter: (valNotaInter + JSON.parse(localStorage.getItem('notaTotalInter')))/(JSON.parse(localStorage.getItem('qtdNotasInter'))+1)
                    }
                }
                else
                {
                    notaDataInter = 
                    {
                        notaInter: valNotaInter,
                        notaTotalInter: valNotaTotalInter+=valNotaInter,
                        qtdNotasInter: contClicksInter++,
                        notaMediaInter: valNotaMediaInter=valNotaTotalInter/(contClicksInter-1)
                    }
                }
                JSON.stringify(localStorage.setItem('notaAtualInter',notaDataInter.notaInter));
                JSON.stringify(localStorage.setItem('notaTotalInter',notaDataInter.notaTotalInter));
                JSON.stringify(localStorage.setItem('qtdNotasInter',notaDataInter.qtdNotasInter));
                JSON.stringify(localStorage.setItem('notaMediaInter',notaDataInter.notaMediaInter));
                showNotaInter = JSON.parse(localStorage.getItem('notaMediaInter'));
                notaFinalInter.innerHTML=showNotaInter.toFixed(1);
            }
            doMedia=1;
            if (notaProp1.checked == true)
                valNotaProp=+notaProp1.value;
            else if (notaProp2.checked == true)
                valNotaProp=+notaProp2.value;
            else if (notaProp3.checked == true)
                valNotaProp=+notaProp3.value;
            else if (notaProp4.checked == true)
                valNotaProp=+notaProp4.value;
            else if (notaProp5.checked == true)
                valNotaProp=+notaProp5.value;
            else if (notaProp6.checked == true)
                valNotaProp=+notaProp6.value;
            else if (notaProp7.checked == true)
                valNotaProp=+notaProp7.value;
            else if (notaProp8.checked == true)
                valNotaProp=+notaProp8.value;
            else if (notaProp9.checked == true)
                valNotaProp=+notaProp9.value;
            else if (notaProp10.checked == true)
                valNotaProp=+notaProp10.value;
            else
            {
                doMedia=0;
            }
            if (doMedia==1)
            {
                if(localStorage.getItem('notaAtualProp'))
                {
                    notaDataProp =
                    {
                        notaProp: valNotaProp,
                        notaTotalProp: valNotaProp + JSON.parse(localStorage.getItem('notaTotalProp')),
                        qtdNotasProp: JSON.parse(localStorage.getItem('qtdNotasProp'))+1,
                        notaMediaProp: (valNotaProp + JSON.parse(localStorage.getItem('notaTotalProp')))/(JSON.parse(localStorage.getItem('qtdNotasProp'))+1)
                    }
                }
                else
                {
                    notaDataProp = 
                    {
                        notaProp: valNotaProp,
                        notaTotalProp: valNotaTotalProp+=valNotaProp,
                        qtdNotasProp: contClicksProp++,
                        notaMediaProp: valNotaMediaProp=valNotaTotalProp/(contClicksProp-1)
                    }
                }
                JSON.stringify(localStorage.setItem('notaAtualProp',notaDataProp.notaProp));
                JSON.stringify(localStorage.setItem('notaTotalProp',notaDataProp.notaTotalProp));
                JSON.stringify(localStorage.setItem('qtdNotasProp',notaDataProp.qtdNotasProp));
                JSON.stringify(localStorage.setItem('notaMediaProp',notaDataProp.notaMediaProp));
                showNotaProp = JSON.parse(localStorage.getItem('notaMediaProp'));
                notaFinalProp.innerHTML=showNotaProp.toFixed(1);
            }
            doMedia=1;
            if (notaExec1.checked == true)
                valNotaExec=+notaExec1.value;
            else if (notaExec2.checked == true)
                valNotaExec=+notaExec2.value;
            else if (notaExec3.checked == true)
                valNotaExec=+notaExec3.value;
            else if (notaExec4.checked == true)
                valNotaExec=+notaExec4.value;
            else if (notaExec5.checked == true)
                valNotaExec=+notaExec5.value;
            else if (notaExec6.checked == true)
                valNotaExec=+notaExec6.value;
            else if (notaExec7.checked == true)
                valNotaExec=+notaExec7.value;
            else if (notaExec8.checked == true)
                valNotaExec=+notaExec8.value;
            else if (notaExec9.checked == true)
                valNotaExec=+notaExec9.value;
            else if (notaExec10.checked == true)
                valNotaExec=+notaExec10.value;
            else
            {
                doMedia=0;
            }
            if (doMedia==1)
            {
                if(localStorage.getItem('notaAtualExec'))
                {
                    notaDataExec =
                    {
                        notaExec: valNotaExec,
                        notaTotalExec: valNotaExec + JSON.parse(localStorage.getItem('notaTotalExec')),
                        qtdNotasExec: JSON.parse(localStorage.getItem('qtdNotasExec'))+1,
                        notaMediaExec: (valNotaExec + JSON.parse(localStorage.getItem('notaTotalExec')))/(JSON.parse(localStorage.getItem('qtdNotasExec'))+1)
                    }
                }
                else
                {
                    notaDataExec = 
                    {
                        notaExec: valNotaExec,
                        notaTotalExec: valNotaTotalExec+=valNotaExec,
                        qtdNotasExec: contClicksExec++,
                        notaMediaExec: valNotaMediaExec=valNotaTotalExec/(contClicksExec-1)
                    }
                }
                JSON.stringify(localStorage.setItem('notaAtualExec',notaDataExec.notaExec));
                JSON.stringify(localStorage.setItem('notaTotalExec',notaDataExec.notaTotalExec));
                JSON.stringify(localStorage.setItem('qtdNotasExec',notaDataExec.qtdNotasExec));
                JSON.stringify(localStorage.setItem('notaMediaExec',notaDataExec.notaMediaExec));
                showNotaExec = JSON.parse(localStorage.getItem('notaMediaExec'));
                notaFinalExec.innerHTML=showNotaExec.toFixed(1);
                this.checked = false;
                for (j=0;j<50;j++){
                    theForm[j].checked=false;
                }
                evento.preventDefault();
            }
    }
}