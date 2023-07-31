const loadData = async (id = 6) => {
    const url = `https://forbes400.onrender.com/api/forbes400/industries/technology?limit=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
}

const displayData = data => {
    console.log(data);
    function loadDetails(data) {
        const parent = document.getElementById('parent');
        parent.innerHTML = '';
        data.forEach(singleData => {
            console.log(singleData);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card h-100 px-2 py-3 text-white" style="background-color:#0E1B34;">
                <h4 class="text-center mb-4">${singleData.person.name}</h4>
                    <div class="d-flex align-items-center gap-2">
                        <img src="${singleData.person.squareImage}" class="card-img-top w-50 h-75" alt="...">
                    <div class="card-body w-50">
                        <h6>Citizenship: ${singleData.countryOfCitizenship}</h6>
                        <h6>state: ${singleData.state}</h6>
                        <h6>city: ${singleData.city}</h6>
                        <h6>Total Shares: ${singleData.financialAssets ? singleData.financialAssets[0].numberOfShares : ' '}</h6>
                        <h6>Shares Price: ${singleData.financialAssets ? singleData.financialAssets[0].sharePrice : ' '}</h6>
                    </div>
                </div>
            </div>
            `;
            parent.appendChild(div);
        })
    }
    loadDetails(data);
}

document.getElementById('more').addEventListener('click', function () {
    loadData(400);
})


loadData();