function jumpToBankDecision() {
    setTimeout(function() {
        document.querySelector('.right_side_container').innerHTML = `
    <p>Дорогой клиент</p>
                <p>Поздравляем! Ваша заявка на кредит успешно одобрена. Мы <br> готовы предоставить вам финансовую поддержку для реализации <br> ваших планов.
                </p>
                <p>Сумма кредита, процентная ставка и другие условия были <br> согласованы. Мы ценим ваш выбор нас, и наша команда готова <br> ответить на любые вопросы, которые у вас могут возникнуть.
                </p>
                <p>С нетерпением ждем с вами долгосрочного и взаимовыгодного <br> сотрудничества.
                </p>
                <p>С уважением, BCC.kz
                </p>
                <button onclick="jumpToSigningDocuments()">Подписать документы</button>
    `

    document.getElementById('styleLink').href = 'bank_decision.css';

    document.getElementById('own_js_file').src = '';
    
    document.getElementById('loading_popup_container').innerHTML = '';
    }, 5000);
}


function jumpToSigningDocuments() {
    document.querySelector('.right_side_container').innerHTML = `
    <h2>Подписать документы</h2>
    <p>Подписание документа идет в онлайн формате, прикрепите свой <br> ЭЦП-ключ. </p>
    <div class="document-container">
        <span></span>
        <div class="file-input-container">
            <label class="file-input-icon" for="documentInput">
                <img width="25rem" src="../views/images/paperclip.png" alt="Paperclip Icon">
            </label>
            <span class="attached-document" id="attachedDocument">ЭЦП</span>
            <input id="documentInput" class="file-input" type="file" style="display:none;" accept=".p12" onchange="updateAttachedDocument(this)">
        </div>

        <button class="attach-button" onclick="navigateToAnotherPage(); jumpToCompleting()">Подписать документы</button>
    </div>
`

document.getElementById('styleLink').href = 'signing_documents.css';

document.getElementById('own_js_file').src = 'signing_documents.js';

}


function jumpToCompleting () {
    document.querySelector('.right_side_container').innerHTML = `
    <p>Уважаемый клиент, <br> С радостью сообщаем что ваша заявка на кредит успешно <br> одобрена! Ваши финансовые возможности сейчас станут еще <br> ближе, и мы готовы предоставить вам необходимые средства. <br>
                Ожидайте, что деньги скоро поступят на ваш счет BBC.kz. Мы <br> ценим ваш выбор в пользу нашего банка и гордимся тем, что <br> можем быть частью ваших финансовых успехов. <br>
                Спасибо за доверие. Мы всегда готовы помочь воплотить ваши <br> финансовые планы в жизнь.</p>
                <a href="../views/main_page.html"><button>На главную</button></a>
`

document.getElementById('styleLink').href = 'completing.css';

document.getElementById('own_js_file').src = '';
}


function navigateToAnotherPage() {
    // Change the href to the desired destination page
    window.location.href = "#";
}

function updateAttachedDocument(input) {
    const attachedDocument = document.getElementById('attachedDocument');
    if (input.files.length > 0) {
        attachedDocument.textContent = input.files[0].name;
    } else {
        attachedDocument.textContent = '';
    }
}