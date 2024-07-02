document.addEventListener("DOMContentLoaded", function () {
  // Validasi form saat submit
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form submit jika validasi tidak lolos

    // Validasi nama tidak boleh kosong
    const nama = document.getElementById("nama").value;
    if (nama.trim() === "") {
      alert("Nama tidak boleh kosong");
      return;
    }

    // Validasi tanggal lahir tidak boleh kosong
    const tanggalLahir = document.getElementById("tanggal_lahir").value;
    if (tanggalLahir.trim() === "") {
      alert("Tanggal Lahir tidak boleh kosong");
      return;
    }

    // Validasi minimal harus memilih jenis kelamin
    const jenisKelamin = document.querySelector(
      'input[name="jenis_kelamin"]:checked'
    );
    if (!jenisKelamin) {
      alert("Pilih jenis kelamin");
      return;
    }

    // Jika semua validasi berhasil, bisa tambahkan kode untuk mengirimkan data form ke server
    alert("Form berhasil dikirim!");
    form.reset(); // Mengosongkan form setelah submit berhasil
  });

  // Handle click event pada tombol 'Get start'
  const getStartButton = document.querySelector(".content .btn");
  getStartButton.addEventListener("click", function () {
    alert("Anda telah memulai!");
    // Tambahkan kode lain sesuai kebutuhan saat tombol diklik
  });

  // Handle click event pada tombol 'Join' di bagian Product
  const joinButtons = document.querySelectorAll(".harga .btn");
  joinButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const paket = this.parentElement.querySelector("h3").textContent;
      const harga = this.parentElement.querySelector("h4").textContent;
      alert(`Anda telah bergabung dengan ${paket} seharga ${harga}`);
      // Tambahkan kode lain sesuai kebutuhan saat tombol 'Join' di klik
    });
  });
});
