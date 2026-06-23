const danhSachHocSinh = [
{
    mahs:"HS001",
    matkhau:"123456",
    hoten:"Bàng Tiến Hào",
    ngaysinh:"19/11/1991",
    lop:"9A",
    truong:"THCS Hoàng Ngân"
},
{
    mahs:"HS002",
    matkhau:"654321",
    hoten:"Dương Hồng Tuyến",
    ngaysinh:"12/08/1982",
    lop:"9A",
    truong:"THCS Hoàng Ngân"
},
{
    mahs:"HS003",
    matkhau:"132436",
    hoten:"Lý Thị Linh",
    ngaysinh:"25/08/1990",
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
    "hoTen",
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

    localStorage.setItem(
    "dangNhap",
    "true"
);
window.location.href =
"Trangchu.html";
}