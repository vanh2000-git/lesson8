let browser = prompt("Nhập địa điểm du lịch")
switch (browser) {
    case 'Sapa':
        alert("4 triệu");
        break;
    case 'Phú Quốc':
        alert("15tr");
        break;
    case 'Đà Nẵng':
        alert("10tr");
        break;
    case 'Nhật Bản':
        alert("30tr");
        break;
    case 'Pháp':
        alert('50tr');
        break;
    default:
        alert('Nhập địa điểm du lịch để nhận ước tính chi phí');
}