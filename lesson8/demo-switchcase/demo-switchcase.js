let diadiem = prompt("Nhập địa điểm du lịch")
switch (diadiem) {
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
    case 'Đầi Loan':
    case 'Trung Quốc':
        alert("20tr");
        break;
    case 'Châu Âu':
        alert("60tr");
        let cachthuc = prompt("Bạn đi theo tour hay cá nhân?")
        switch (cachthuc){
            case 'tour':
                alert("60tr");
                break;
            case 'cá nhân':
                alert("100tr");
                break;
        }
    default:
        alert('nhập địa điểm du lịch để nhận ước tính chi phí');
        break;
}