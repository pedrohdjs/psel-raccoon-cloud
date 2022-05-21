/**
 * Predicado que determina se um CPF é válido. Essa função
 * assume que o CPF está formatado corretamente e contém 11
 * números no formato XXX.XXX.XXX-XX.
 */
 module.exports = function (cpf) {
    const digits = Array.from(cpf)
                    .filter(val => !isNaN(val))
                    .map(Number)

    // Cálculo do primeiro digito verificador
    let sum = 0
    for (let i = 1; i <= 9; i++) {
        sum += digits[i-1] * i
    }
    sum %= 11

    //A operação de módulo transforma o 10 em 0 e preserva outros valores
    const firstVerifyingDigit = sum % 10 

    // Cálculo do segundo digito verificador
    sum = 0
    for (let i = 1; i <= 9; i++) {
        sum += digits[i] * i
    }
    sum %= 11

    const secondVerifyingDigit = sum % 10

    if (firstVerifyingDigit !== digits[9] || secondVerifyingDigit !== digits[10]) {
        return false
    }
    else{
        return true;
    }
}
