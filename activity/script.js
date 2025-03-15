document.getElementById('click').addEventListener('click', function(e) {
    e.preventDefault
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    
    th1.textContent = 'Name';
    th2.textContent = 'Prenom';
    th3.textContent = 'Age';
    
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    
    table.appendChild(tr)
    table.style.border = '1px solid black'
    
    document.body.appendChild(table)
    table.id = 'tab'
   
    });

    document.getElementById('submit').addEventListener('click', function(e) {
        e.preventDefault
        let a = document.getElementById('name').value;
        let b = document.getElementById('prenom').value;    
        let c = document.getElementById('age').value;
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let tr = document.createElement('tr');
        td1.textContent = a;
        td2.textContent = b;
        td3.textContent = c;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
       
        document.getElementById('tab').appendChild(tr);
       

    });

    