// Submit butonunu seç
var submitBtn = document.getElementById('submitBtn');

// Başlangıç değeri
var initialRowCountAndColumnCount = 16;

// Container divini seç
var container = document.querySelector('.container');

// Container boyutunu al
var containerWidth = container.clientWidth;
var containerHeight = container.clientHeight;

// İlk açılışta 16x16'lık bir ızgara oluştur
createGrid(initialRowCountAndColumnCount);

// Submit butonuna tıklanınca çalışacak işlevi tanımla
submitBtn.addEventListener('click', function() {
    // Kullanıcının girdiği değeri al
    var userInput = document.getElementById('userInput').value;

    // Girilen değeri kontrol et
    var totalCount = parseInt(userInput);

    // Eğer kullanıcı bir değer girmediyse veya girdiği değer 16'dan küçükse, varsayılan olarak 16'yı kullan
    if (!totalCount || totalCount < 1) {
        alert("Lütfen 1 veya daha büyük bir sayı giriniz.");
        return; // Kodun buradan sonrasını çalıştırma
    } else if (totalCount > 100) { // 100'den büyükse uyarı mesajı göster
        alert("Lütfen 100 veya daha küçük bir sayı giriniz.");
        return; // Kodun buradan sonrasını çalıştırma
    }

    // İzgarayı oluştur
    createGrid(totalCount);

    // Kullanıcının girdiği değeri göster
    var savedValue = document.getElementById('savedValue');
    savedValue.textContent = "Girilen Değer: " + userInput;
});

// İzgarayı oluşturan fonksiyon
function createGrid(count) {
    // Container içeriğini temizle
    container.innerHTML = '';

    // İzgara hücre boyutunu hesapla
    var cellWidth = containerWidth / count;
    var cellHeight = containerHeight / count;

    // Satır için döngü oluştur
    for (var i = 0; i < count; i++) {
        // Satırı oluştur
        var row = document.createElement('div');
        row.classList.add('row');

        // Sütun için iç içe döngü oluştur
        for (var j = 0; j < count; j++) {
            // Sütunu oluştur
            var column = document.createElement('div');
            column.classList.add('column');
            column.textContent = (i + 1) + (j);
            column.style.width = cellWidth + 'px';
            column.style.height = cellHeight + 'px';

            // Sütunu satıra ekle
            row.appendChild(column);
        }

        // Satırı containera ekle
        container.appendChild(row);
    }
}
