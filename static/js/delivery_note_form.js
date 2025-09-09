document.getElementById('deliveryNoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!validateForm()) return;
    document.getElementById('loading').style.display = 'block';
    const formData = new FormData(this);
    const jsonData = {};
    const items = [];
    for (let [key, value] of formData.entries()) {
        if (!key.includes('[]') && key !== 'csrfmiddlewaretoken') {
            jsonData[key] = value;
        }
    }
    const descriptions = formData.getAll('description[]');
    const uoms = formData.getAll('uom[]');
    const quantities = formData.getAll('quantity[]');
    const rates = formData.getAll('rate[]');
    const mtr_dhas = formData.getAll('mtr_dha[]');
    const project_names = formData.getAll('project_name[]');
    const remarks = formData.getAll('remarks[]');
    for (let i = 0; i < descriptions.length; i++) {
        items.push({
            sno: i + 1,
            description: descriptions[i],
            uom: uoms[i],
            quantity: quantities[i],
            rate: rates[i],
            mtr_dha: mtr_dhas[i],
            project_name: project_names[i],
            remarks: remarks[i]
        });
    }
    jsonData.items = items;
    fetch('/delivery-challan/save-delivery-note/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => { throw new Error(err.message); });
        }
        return response.blob();
    })
    .then(blob => {
        document.getElementById('loading').style.display = 'none';
        // Trigger PDF download
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Delivery_Note_${jsonData.dcNo}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        // Redirect to dashboard
        window.location.href = '/delivery-challan/dashboard/';
    })
    .catch(error => {
        document.getElementById('loading').style.display = 'none';
        alert('Error: ' + error.message);
    });
});