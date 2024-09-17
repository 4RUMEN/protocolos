document.getElementById('info-btn').addEventListener('click', () => {
    const infoDiv = document.getElementById('info');
    if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
        infoDiv.style.display = 'block';
    } else {
        infoDiv.style.display = 'none';
    }
});
