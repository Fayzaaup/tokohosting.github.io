document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.bid a');

    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const panelName = this.parentElement.parentElement.querySelector('.info h5').innerText;
            const panelPrice = this.parentElement.parentElement.querySelector('.btc p').innerText;
            
            const currentDate = new Date();
        const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
            const pay = 'DANA & QRIS';
            const isp = 'LINODE / DIGITAL OCEAN';
            const expired = '1 BULAN';
            const note = 'Sertakan screenshot bukti transfer agar admin dapat memproses pesanan anda.';
            
            const whatsappMessage = `𝗡𝗘𝗪 𝗢𝗥𝗗𝗘𝗥 | ${formattedDate}\n\n𝗣𝗥𝗢𝗗𝗨𝗞 : ${panelName}\n𝗣𝗥𝗜𝗖𝗘 : ${panelPrice}\n𝗘𝗫𝗣𝗜𝗥𝗘𝗗 : ${expired}\n𝗜𝗦𝗣 : ${isp}\n𝗣𝗔𝗬𝗠𝗘𝗡𝗧 : ${pay}\n\n𝗡𝗼𝘁𝗲: ${note}`;


            const whatsappLink = `https://wa.me/6285725849489?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(whatsappLink, '_blank');
        });
    });
});