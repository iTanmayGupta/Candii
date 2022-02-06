"use strict";


document.addEventListener('DOMContentLoaded', function() {

    let amount = document.querySelectorAll(".amountNum")
    for(let i=0; i<amount.length; i++) {
        amount[i].addEventListener('click', () => {
            let amt = amount[i].innerHTML
            let finalAmount = document.querySelector("#finalAmount")
            finalAmount.value = amt
            console.log(finalAmount)
        })
    }

    let sendMoney = document.querySelector('#sendMoney')
    sendMoney.addEventListener('click', () => {
        let finalAmount = document.querySelector("#finalAmount")
        if(finalAmount.value != null) {
            ethereum
                .request({
                method: 'eth_sendTransaction',
                params: [
                    {
                    from: accounts[0],
                    to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
                    value: '0x29a2241af62c0000',
                    gasPrice: '0x09184e72a000',
                    gas: '0x2710',
                    },
                ],
                })
                .then((txHash) => console.log(txHash))
                .catch((error) => console.error);
        }
    })
})