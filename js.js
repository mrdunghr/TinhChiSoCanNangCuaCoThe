function kiemtra(){
    let cannang = document.getElementById('input1').value;
    let chieucao = document.getElementById('input2').value;
    let bmi = cannang / (Math.pow(chieucao, 2));
    if (bmi < 18){
        document.getElementById('ChiSo').innerHTML = 'Chỉ Số BMI: ' + bmi + ' Thiếu Cân';
    } else if (bmi < 25){
        document.getElementById('ChiSo').innerHTML = 'Chỉ Số BMI: ' + bmi + ' Bình Thường';
    }else if (bmi < 30){
        document.getElementById('ChiSo').innerHTML = 'Chỉ Số BMI: ' + bmi + ' Thừa Cân';
    }else
        document.getElementById('ChiSo').innerHTML = 'Chỉ Số BMI: ' + bmi + ' Béo Phì';
}