document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.bid a');

    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const panelName = this.parentElement.parentElement.querySelector('.info h5').innerText;
            const panelPrice = this.parentElement.parentElement.querySelector('.btc p').innerText;

            const whatsappMessage = `𝗡𝗘𝗪 𝗢𝗥𝗗𝗘𝗥\n\n𝗣𝗥𝗢𝗗𝗨𝗞 : ${panelName}\n𝗣𝗥𝗜𝗖𝗘 : ${panelPrice}\n𝗣𝗔𝗬𝗠𝗘𝗡𝗧 : DANA,GOPAY,QRIS\n𝗜𝗦𝗣 : LINODE, DIGITAL OCEAL\n\n𝗡𝗼𝘁𝗲: Sertakan bukti transfer agar admin dapat memproses pesanan anda.`;

            const whatsappLink = `https://wa.me/6285725849489?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(whatsappLink, '_blank');
        });
    });
});