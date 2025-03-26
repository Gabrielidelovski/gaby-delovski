document.addEventListener('DOMcontentLoaded', function(){
    let tamanhoAtualFonte= 1;
    const aumentaFonteBotao= document.getElementById('aumentar-fonte');

    aumentaFonteBotao.addEventListener('click', fuction(){
        tamanhoAtualFonte +=0.1;
        document.body.style.fonteSize= '${tamanhoAtualFonte}rem';
    })
    const diminuiFonteBotao= document.getElementById('diminuir-fonte')
    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize= '${tamanhoAtualFonte}rem';
    })
})