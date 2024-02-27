document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.bid a');

    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        const productName = this.parentElement.parentElement.querySelector('.info h5').innerText;
        const price = this.parentElement.parentElement.querySelector('.btc p').innerText;
        const type = this.parentElement.parentElement.querySelector('.bid p').innerText;
        const expired = this.parentElement.parentElement.querySelector('.info p:nth-child(2)').innerText;

        const currentDate = new Date();
        const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

        const paymentLink = 'https://payment.fayzaafx.tech';
        
        const linkGrup = 'https://chat.whatsapp.com/B66GNYaNyEL5YcpZIowGdl';
        
        const note = 'Sertakan screenshot bukti transfer agar admin dapat memproses pesanan anda. Jika tidak ada bukti transfer admin tidak akan memproses pesanan anda walaupun saldo masuk.';

        const message = `𝗡𝗘𝗪 𝗢𝗥𝗗𝗘𝗥 | *${formattedDate}*\n\n𝗣𝗥𝗢𝗗𝗨𝗞 : ${productName}\n𝗣𝗥𝗜𝗖𝗘 : ${price}\n𝗧𝗬𝗣𝗘 𝗕𝗢𝗧 : ${type}\n𝗘𝗫𝗣𝗜𝗥𝗘𝗗 : ${expired}\n𝗣𝗔𝗬𝗠𝗘𝗡𝗧 : ${paymentLink}\n\n𝗡𝗼𝘁𝗲: ${note}\n\n*JOIN GRUP WHATSAPP FAYY SHOP*\n${linkGrup}\n\n© 𝗖𝗦 𝗙𝗔𝗬𝗬 𝗦𝗛𝗢𝗣`;

        const whatsappLink = `https://wa.me/6281295169487?text=${encodeURIComponent(message)}`;

        window.location.href = whatsappLink;
    });
  });
});