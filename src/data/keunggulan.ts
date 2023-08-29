import iconswork from '../assets/svg/24jam.svg'
import pasanginternet from '../assets/svg/pasangInternet.svg'
import callcenter from '../assets/svg/callcenter.svg'
import pg from '../assets/svg/pg.svg'


interface unggul  {
    title : string,
    price : string,
    deskripsi : string,
    icon : string
}


export const Keunggulan: unggul[] = [
    {
        title: "Pelayanan 24 jam",
        price : "20 ribu (ongkos kendaraan)",
        deskripsi : "pelayanan ini hanya untuk melakukan perbaikan yang ada pada pelanggan yang mengalami kerusakan",
        icon : iconswork
    },
    {
        title: "Pemasangan perangkat internet",
        price : "20 ribu (ongkos kendaraan)",
        deskripsi : "pelayanan ini hanya untuk pengguna baru yang ingin memasang perangkat internet yang berasal dari perusahaan kami",
        icon : pasanginternet
    },
    {
        title: "call center 24 jam",
        price : "gratis",
        deskripsi : "pelayanan ini untuk komunikasi pelanggan dan pengguna untuk kendala atau pertanyaan yang berkaitan dengan layanan",
        icon : callcenter
    },
    {
        title: "pembayaran menggunakan metode online dan offline",
        price : "gratis",
        deskripsi : "pelayanan ini untuk transaksi pembayaran langganan yang dilakukan setiap bulan, pembayran ini memanfaatkan paymentGateway",
        icon : pg
    },
]