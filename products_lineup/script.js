const modal = document.getElementById('modal');
const modalTitle = document.querySelector('.modal-content h2');
const modalBody = document.getElementById('modal-details');
const closeBtn = document.querySelector('.close-btn');
document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', function() {
        const details = this.getAttribute('data-details');
        displayModal(details);
    });
});
function displayModal(details) {
    switch(details) {
        case 'gold':
            modalTitle.textContent = "金地金の詳細";
            modalBody.innerHTML = `
                <h3>金地金の魅力</h3>
                <p style="text-align: left;">金は酸化をすることがないため、腐食することがありません。ツタンカーメンの被り物は、いまだ輝きを失わないのはまさに永遠を象徴しているようです。<br>また、株や通貨と異なり、発行元がありません。</p>
            `;
            break;
        case 'coin':
            modalTitle.textContent = '金貨について';
            modalBody.innerHTML = `
                <h3>金貨の歴史と魅力</h3>
                <p style="text-align: left;">金貨は昔から取引や資産保護の手段とされていました。特にコレクター向けの金貨は希少性が非常に高いです。<br>
                投資だけでなく、歴史的価値や美術品としても非常に魅力的です。</p>
            `;
            break;
        case 'etf':
            modalTitle.textContent = '金ETFの魅力';
            modalBody.innerHTML = `
                <h3>金ETFとは？</h3>
                <p style="text-align: left;">金ETF（上場投資信託）とは、金の値動きに連動する運用成果を目指し、東京証券取引所などに上場されている投資信託になります。。</p>
                <h3>株式と同様に売買ができます</h3>
                <p style="text-align: left;">投資信託の基準価額は1日1回だけですが、ETFは取引所が開いている時間帯は株式同様、リアルタイムで取引が可能です。信用取引も可能です。</p>
                <h3>値動きがわかりやすい</h3>
                <p style="text-align: left;">金価格に連動して運用されているため、価格の変動がわかりやすく、市場が開いている時間であればリアルタイムで値動きを見ながら取引することができます。</p>
            `;
            break;
        case 'jewelry':
            modalTitle.textContent = '金ジュエリーの魅力';
            modalBody.innerHTML = `
                <h3>高級感あふれる金ジュエリー</h3>
                <p style="text-align: left;">金の含有量が多ければ多いほど、その価値は高くなります。</p>
            `;
            break;
        case 'fund':
            modalTitle.textContent = '金の関連株について';
            modalBody.innerHTML = `
                <h3>金関連株投資とは</h3>
                <p style="text-align: left;">金の関連株とは、金価格の影響を受ける株式のことです。 非鉄金属と都市鉱山株が中心となります。</p>
                <h3>配当があります。</h3>
                <p style="text-align: left;">配当とは、企業が生み出した利益の一部を株主に還元するものです。株式を保有し続けることで、企業の業績に応じて決算ごとに配当金が支払われます。ただし、業績次第では配当がない場合もあります。</p>
                <h3>信用取引で資金効率を高められます</h3>
                <p style="text-align: left;">信用取引は、手元の資金の約3倍まで取引ができるため、少額の資金でも大きな取引が可能です。しかし、利益を得られる可能性が高まる一方で、予想が外れた場合には損失を被るリスクもあるため、注意が必要です。</p>
            `;
            break;
            case 'savings':
            modalTitle.textContent = '純金積立について';
            modalBody.innerHTML = `
                <h3>純金積立とは</h3>
                <p style="text-align: left;">毎月一定の金額を拠出し、その都度の金価格に応じて少しずつ純金を購入していく投資方法です。いわゆる「ドルコスト平均法」による積立になります。</p>
                <h3>ドルコスト平均法</h3>
                <p style="text-align: left;">価格の高いときには少なく、安いときには多くの金を買うことができます。そのため、長期的にみると金価格の変動リスクを平準化できるという特徴があります。</p>
            `;
            break;
        default:
            modalTitle.textContent = '商品詳細';
            modalBody.textContent = '詳細情報が見つかりません。';
    }
    modal.style.display = 'flex';
}
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
