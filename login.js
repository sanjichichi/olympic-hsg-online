const danhSachHocSinh = [
{
    mahs:"HS001",
    matkhau:"123456",
    hoten:"Bàng Tiến Hào",
    ngaysinh:"19/11/1991",
    lop:"9A",
    truong:"THCS Hoàng Ngân",
}
];

function dangNhap(){

    let mahs =
    document.getElementById("mahs")
    .value.trim();

    let matkhau =
    document.getElementById("matkhau")
    .value.trim();

    if(mahs === "" || matkhau === ""){

        document.getElementById("thongbao")
        .innerHTML =
        "Vui lòng nhập đầy đủ thông tin";

        return;
    }

    let hocSinh =
    danhSachHocSinh.find(function(hs){

        return hs.mahs === mahs &&
               hs.matkhau === matkhau;

    });

    if(!hocSinh){

        document.getElementById("thongbao")
        .innerHTML =
        "Sai mã học sinh hoặc mật khẩu";

        return;
    }

    localStorage.setItem(
        "maThiSinh",
        hocSinh.mahs
    );

    localStorage.setItem(
        "tenThiSinh",
        hocSinh.hoten
    );
    localStorage.setItem(
    "ngaySinh",
    hocSinh.ngaysinh
    );
    localStorage.setItem(
        "lopThiSinh",
        hocSinh.lop
    );
    localStorage.setItem(
        "truong",
        hocSinh.truong
    );

    window.location.href =
"xacnhan.html";
}