/**
 * Determina as possíveis UFs de um CPF. Essa função
 * assume que o CPF está formatado corretamente e contém 11
 * números no formato XXX.XXX.XXX-XX.
 */
 module.exports = function (cpf) {
    const digit = Number(cpf[10])
    const ufs = {
        0: "rs",
        1: "df, go, mt, ms, to",
        2: "am, pa, rr, ap, ac, ro",
        3: "ce, ma, pi",
        4: "pb, pe, al, rn",
        5: "ba, se",
        6: "mg",
        7: "rj, es",
        8: "sp",
        9: "pr, sc"
    }
    return ufs[digit] || "não identificado (CPF mal formatado)"
}
