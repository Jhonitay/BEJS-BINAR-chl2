
export class BankAccount {
    constructor(saldoAwal = 0) {
      this.saldo = saldoAwal;
    }
  
    deposit(data) {
      setTimeout(() => {
        this.saldo += data;
        console.log(`deposit ${data} berhasil dilakaukan.`);
      }, 2000); 
    }
  
    withdraw(data) {
      setTimeout(() => {
        if (this.saldo >= data) {
          this.saldo -= data;
          console.log(`penarikan  ${data} berhasil dilakukan.`);
        } else {
          console.log("saldo kurang");
        }
      }, 2000); 
    }
  }
  




  
// let saldo = 100
// let check = 0
// let data 
// let sttus = true
// // document.getElementById("nilai").textContent="total saldo = "+saldo

// function infoSaldo(){
//     document.getElementById("nilai").textContent="total saldo = "+saldo
// }

// function tambahSaldo(){
//     sttus = true
//     do{
//         check = window.prompt("masukan nominal saldo yang ingin anda tambahkan ")
//          data = parseInt(check)
//         if (check === null){
//             alert("anda membatalkan transaksi")
//             sttus=false
//         }else if (data > 0){
//             saldo = saldo + data
//             alert ("saldo ditambahkan sebesar "+data+" menjadi "+saldo)
//             sttus=false
//             infoSaldo()
//         }
//         else{
//             alert("input yang dimasukan keliru " )
//             sttus=true
//         }
//     }while(sttus == true)
// }
// function kurangiSaldo(){
//     sttus = true
//     do{
//         check = window.prompt("masukan nominal saldo yang ingin anda kurangi ")
//         data = parseInt(check)
//         if(check === null ){
//             alert("anda membatalkan transaksi")
//             sttus=false
//         }else if (data > 0){
//             if (saldo < data){
//                 alert("kesalahan, Nominal yang di kurangi lebih banyak dari jumlaha saldo")
//             }else{
//                 saldo = saldo - data
//                  alert ("saldo dikurangi sebesar "+data+" menjadi "+saldo)
//                 sttus=false
//                 infoSaldo()
//             }
//         }else{
//             alert("input yang dimasukan keliru " )
//             sttus=true
//         }
//     }while(sttus == true)
// }


