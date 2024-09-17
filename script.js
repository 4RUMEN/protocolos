const timeline = [
    { dia: "D0", evento: "Inserção do dispositivo de progestágeno e aplicação de 2 mg de BE" },
    { dia: "D7/D8", evento: "Retirada do dispositivo e aplicação de PGF2α" },
    { dia: "24h após D7/D8", evento: "Aplicação de 1 mg de BE" },
    { dia: "52-56h após D7/D8", evento: "Inseminação Artificial em Tempo Fixo (IATF)" }
];

const timelineElement = document.getElementById('timeline');

timeline.forEach(item => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.innerHTML = `<strong>${item.dia}</strong>: ${item.evento}`;
    timelineElement.appendChild(div);
});
