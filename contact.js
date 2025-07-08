document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Cegah submit ke server

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        // Validasi input
        if (!name || !email || !subject || !message) {
            alert("Semua kolom harus diisi!");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            alert("Alamat email tidak valid!");
            return;
        }

        // Tampilkan notifikasi sukses
        alert("Terima kasih! Pesan Anda akan segera kami proses.");

        // Kosongkan form
        form.reset();
    });
});
