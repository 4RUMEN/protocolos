document.addEventListener('DOMContentLoaded', function() {
    const timelineContent = document.getElementById('timeline-content');
    timelineContent.innerHTML = `
        <ul>
            <li>Dia 0: Inserção do dispositivo de progestágeno e aplicação de Benzoato de Estradiol.</li>
            <li>Dia 7/8: Retirada do dispositivo e aplicação de Prostaglandina F2α.</li>
            <li>Dia 8/9: Aplicação de Benzoato de Estradiol.</li>
            <li>Dia 10/11: Inseminação Artificial.</li>
        </ul>
    `;

    const hormonesContent = document.getElementById('hormones-content');
    hormonesContent.innerHTML = `
        <ul>
            <li><strong>Progestágeno:</strong> Simula a fase luteínica e inibe a ovulação.</li>
            <li><strong>Benzoato de Estradiol:</strong> Promove a regressão do corpo lúteo e estimula o desenvolvimento do folículo dominante.</li>
            <li><strong>Prostaglandina F2α:</strong> Induz a regressão luteínica e promove o ambiente hormonal necessário para a ovulação.</li>
        </ul>
    `;
});
