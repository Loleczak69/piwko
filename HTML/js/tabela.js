function dane(jezyk, place, liczba, strona) {
    this.jezyk=jezyk;
    this.place=place;
    this.liczba=liczba;
    this.strona=strona;
}

const tabJ=[];

tabJ[0] = new dane("HTML",8000, 10000, 'www.w3c.org');
tabJ[1] = new dane("CSS",10000, 5600, 'devdocs.io/css/');
tabJ[2]= new dane("JS",15000,2500, "developer.mozilla.org/en-US/docs/Web/javascript");
tabJ[3] = new dane("PHP",18000, 2000, 'www.php.net/docs.php');
tabJ[4] = new dane("SQL",11000, 6000, 'learn.microsoft.com/en-us/sql/?view=sql-server-ver16');

function wyswietl(tablica) {
    let txt="";
    txt=
        `<tr>
        <td>LP</td> 
        <td>Język programowania</td> 
        <td>Płaca</td>
        <td>Lista programistów</td>  
        <td>Strona www</td>
        </tr> `;
        for (let i = 0; i < tablica.length; i++){
            txt+=
            `<tr>
            <td>${i}</td> 
            <td>${tablica[i].jezyk}</td> 
            <td>${tablica[i].place}</td>
            <td>${tablica[i].liczba}</td>  
            <td>
            <a href=http://${tablica[i].strona}>
            ${tablica[i].strona}
            </a>
            </td>
            </tr> `;
        }
    let el_tab= document.querySelector("#tabelaDanych");
    el_tab.innerHTML=txt;
}