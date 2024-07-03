function elo(wins, loses)
{
    saldo = wins - loses
    let rank
    if (wins <= 10)
    {
        rank = 'Ferro';
    }
    else if (wins <= 20)
    {
        rank = 'Bronze';
    }
    else if (wins <= 50)
    {
        rank = 'Prata';
    }
    else if (wins <= 80)
    {
        rank = 'Ouro';
    }
    else if (wins <= 90)
    {
        rank = 'Diamante';
    }
    else if (wins <= 100)
    {
        rank = 'Lendário';
    }
    else
    {
        rank = 'Imortal';
    }
    console.log("O Herói tem de saldo de " + saldo + " está no nível de " + rank)
}

let wins = 100, loses = 30

elo(wins, loses);