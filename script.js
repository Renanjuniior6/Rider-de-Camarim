const btnGenerator = document.querySelector('#gerarPDF')

btnGenerator.addEventListener('click', () => {

    // Conteúdo do PDF
    const content = document.querySelector('#content')

    // Configuração do arquivo final PDF
    const options = {
        margin: [3, 1, 0, 0],
        filename: 'rider-camarim.pdf',
        html2canvas: {scale: 2},
        jsPDF: { unit: 'mm', format: 'a6', orientation: 'portrait'}
    }  

    // Gerar e baixar o PDF
    html2pdf().set(options).from(content).save()

    setTimeout(() => {
        Toastify({
            text: "Salvo!",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
    }, 1000);

    
})