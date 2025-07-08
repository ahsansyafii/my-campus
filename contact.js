// Validasi form Contact Us
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !subject || !message) {
            e.preventDefault(); // menghentikan pengiriman form
            alert("Semua kolom harus diisi!");
            return false;
        }

        // Validasi email sederhana
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            e.preventDefault();
            alert("Alamat email tidak valid!");
            return false;
        }

        // Notifikasi sukses (opsional)
        alert("Terima kasih! Pesan Anda akan segera kami proses.");
    });
});
